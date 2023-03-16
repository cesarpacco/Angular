class CardNews extends HTMLElement {
    constructor() {
        super();    
        
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
     
    }

    build() {
        const componentRoot = document.createElement("div");
        //SETANDO A CLASSE DA MINHA DIV PRINCIPAL
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");
        
        const autor = document.createElement("span");
        //ABAIXO UTILIZAMOS CONCACTENIZAÇÃO E LÓGICA PARA NOSSA PROPS
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonimo");
        
        const LinkTitle = document.createElement("a");
        LinkTitle.textContent = this.getAttribute("Title") ;
        LinkTitle.href = this.getAttribute("link");
        
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("Content") ;

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right")
        
        const newImage = document.createElement("img");
        newImage.src = this.getAttribute("img");
        newImage.alt = this.getAttribute("alt");
        
        //DECLARANDO QUE AS DIVS SÃO FILHOS DA DIV PRINCIPAL
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        //ADICIONANDO OS ELEMENTS QUE SÃO FILHOS DO CARD LEFT
        cardLeft.appendChild(autor);
        cardLeft.appendChild(LinkTitle);
        cardLeft.appendChild(newsContent);
        
        cardRight.appendChild(newImage);

        return componentRoot;
    }

    styles() {

        const style = document.createElement("style");
        style.textContent = `
        *{ 
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .card {
            width: 80%;
            box-shadow: 9px 9px 27px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_right {
            padding: 0px;
        }
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left h1 {
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card_left a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        .card_left p {
            color: grey;
        }
        
        .card_left span {
            font-weight: 400;
        }
        
        
        img {
            width: 230px;
        }
        
        .card_right img {
            width: 230px;
        }
        `
            return style;
    }
}
// OS CUSTOMS ELEMENTS PRECISAM TER HIFEM NO NOME
customElements.define('card-news', CardNews);
