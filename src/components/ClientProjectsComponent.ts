class ClientProjectsComponent extends HTMLElement{
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
            projects component
        `
    }
}

customElements.define('client-projects-component', ClientProjectsComponent)