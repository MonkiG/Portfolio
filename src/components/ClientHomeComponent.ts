class ClientHomeComponent extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(!this.shadowRoot) return
        this.shadowRoot.innerHTML = /* html */`
            Home component
        `
    }
}

customElements.define('client-home-component', ClientHomeComponent)