class Nav {
  static #HOME_PAGE = 'https://google.com'
  static #back = () => {
    return history.back()
  }
  static #forward = () => {
    return history.forward()
  }
  static #update = () => {
    return location.reload()
  }
  static #changePage = (href) => {
    return location.assign(href)
  }
  static #enter = () => {
    try {
      const url = new URL(window.input.value)
      this.#changePage(url.href)
    } catch (e) {
      alert('Введіть коректну URL адресу')
      console.log(e)
    }
  }
  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }
  static init = () => {
    window.back.onclick = this.#back.bind(this)
    window.forward.onclick = this.#forward.bind(this)
    window.update.onclick = this.#update.bind(this)
    window.home.onclick = this.#home.bind(this)
    window.enter.onclick = this.#enter.bind(this)
    window.input.value = location.href
  }
}

Nav.init()
