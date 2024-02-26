class ClientContainer extends HTMLElement {
    route?: string
    constructor(){
         super()
        this.attachShadow({mode: 'open'})
        this.route = this.dataset.route
    }

    static observedAttributes = ['data-route']

    attributeChangedCallback(name:string, _oldAtt:string, newAtt:string){
        if(name === 'data-route') {
            this.route = newAtt
            this.render()
        }
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(!this.shadowRoot || !this.route) return
        
        const clientComponents: Record<string, string> = {
            "/": "<client-home-component></client-home-component>",
            "/projects": "<client-projects-component></client-projects-component>",
            "/technologies": "<client-technologies-component></client-technologies-component>",
            "/contact-me": "<client-contactme-component></client-contactme-component>"
        }

        this.shadowRoot.innerHTML = /*  html */`
            ${clientComponents[this.route]}
        `
    }
}

customElements.define('client-container', ClientContainer)
