const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const hmap = localStorage.getItem('hmap')
const hmapObject = JSON.parse(hmap)
const hashMap = hmapObject || [
    { logo: 'B', url: 'https://bilibili.com' },
    { logo: 'G', url: 'https://github.com' },
    { logo: 'Z', url: 'https://www.zhihu.com' },
    { logo: 'c', url: 'https://cn.vuejs.org' },
    { logo: 'r', url: 'https://react.docschina.org' }

]


const simplifyUrl = (url) => {
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '')


}

const renderHash = () => {
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node, index) => {
        const $li = $(` 
        <li>
             <div class="site">
                 <div class="logo">${node.logo}</div>
                  <div class="link">${simplifyUrl(node.url)}</div>
                    <div class="closeIcon">
                        <svg class="icon">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </div>
                </div>
        </li>`
        ).insertBefore($lastLi)

        $li.on('click', () => { window.open(node.url) })
        $li.on('click', '.closeIcon', (e) => {
            e.stopPropagation()

            hashMap.splice(index, 1)
            renderHash()
        })
    }
    )


};

renderHash()

$('.addButton')
    .on('click', () => {
        let url = window.prompt('请问要添加的网址是啥')
        if (url.indexOf('http') !== 0) {
            url = 'https://' + url
        }
        hashMap.push({
            logo: simplifyUrl(url)[0].toUpperCase(),
            url: url
        })
        renderHash()
    });

$(document).on('keypress', (e) => {
    const { key } = e
    for (let i = 0; i < hashMap.length; i++) {
        if (hashMap[i].logo.toLowerCase() === key) {
            window.open(hashMap[i].url)
        }
    }
}
)



window.onbeforeunload = () => {
    const hashSave = JSON.stringify(hashMap)
    localStorage.setItem('hmap', hashSave)
}