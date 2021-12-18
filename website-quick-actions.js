typeof $$ === 'undefined' && window.$$ = document.querySelectorAll.bind(document)

const linkedin = {
  async deleteNotifications () {
    $$('.nt-content.relative button.artdeco-dropdown__trigger--placement-bottom')
      .forEach(btn => btn.click())

    await new Promise(res => setTimeout(res, 500))

    $$('.artdeco-dropdown__content-inner button p.t-black--light')
      .forEach(btn => {
        if (btn.innerText === 'Delete') {
          btn.click()
        }
      })
  }
}


const vrs = {
  cleanupTemps () {
    $$('[data-vrs-widget="tdWrapper"]')
      .forEach(node => {
        node.innerText = node.innerText
         .replace(/\s?°C/g, ',')
         .replace(/(\d),\)/g, '$1)')
         .replace(/(\d)\s\%\s/g, '$1%')
    })
  }
}
