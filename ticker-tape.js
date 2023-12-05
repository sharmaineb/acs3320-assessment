class TickerTape extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                @keyframes ticker {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }

                .ticker-text {
                    white-space: nowrap;
                    overflow: hidden;
                    display: inline-block;
                    animation: ticker 10s linear infinite;
                    font-family: 'Mountains of Christmas', sans-serif;
                    font-size: 3.3em;
                    margin: 0;
                }
            </style>
            <div class="ticker-text">${this.innerHTML}</div>
        `;

        const tempNode = template.content.cloneNode(true);
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(tempNode);
    }
}

customElements.define('ticker-tape', TickerTape);
