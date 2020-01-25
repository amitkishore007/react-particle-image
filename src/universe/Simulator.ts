import Universe from './Universe'
import Renderer from './Renderer'
import { Nullable } from './types'

class Simulator {

    universe: Universe;
    renderer: Renderer;
    id: Nullable<number> = null;

    constructor(universe: Universe, renderer: Renderer) {
        this.universe = universe
        this.renderer = renderer
    }

    start = () => {
        if (!this.id) {
            this.loop()
        }
    }

    stop = () => {
        if (this.id) {
            window.cancelAnimationFrame(this.id)
            this.id = null
        }
    }

    private loop = () => {
        this.renderer.drawFrame(this.universe)
        this.universe.tick()
        this.id = window.requestAnimationFrame(this.loop);
    }
    
}

export default Simulator