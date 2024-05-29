import { Router } from "./router.js"

const router = new Router()


router.addRoute('/', '/src/pages/home.html')
router.addRoute('/universo', '/src/pages/universo.html')
router.addRoute('/exploracao', '/src/pages/exploracao.html')
router.addRoute(404, '/src/pages/404.html')

router.addBackground('/', '')
router.addBackground('/universo', 'espace')
router.addBackground('/exploracao', 'explore')
router.handle()
window.route = () => router.route()
window.onpopstate = () => router.handle()

