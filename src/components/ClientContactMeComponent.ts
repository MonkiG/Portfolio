class ClientContactMeComponent extends HTMLElement{
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
            contactme component
        `
    }
}

customElements.define('client-contactme-component', ClientContactMeComponent)