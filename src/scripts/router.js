export class Router {
  routes = {}
  background = {}
  controlers = document.querySelectorAll('a')

  addRoute(routeName, page) {
    this.routes[routeName] = page
  }

  addBackground(routeName, page) {
    this.background[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, '', event.target.href)
    this.handle()
    this.removeAllClassActive()
    this.addClassActiveFromLinkClicked(event.target)
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    const background = this.background[pathname] || ''
    const app = document.getElementById('app')

    fetch(route)
      .then(resp => resp.text())
      .then(data => app.innerHTML = data)

    this.addClassBackGroundFromBody(background)
  }

  addClassActiveFromLinkClicked(e) {
    e.classList.add('active')
  }

  addClassBackGroundFromBody(classN) {
    document.querySelector('body').className = classN
  }

  removeAllClassActive() {
    this.controlers.forEach(link => {
      link.classList.remove('active')
    })
  }
}