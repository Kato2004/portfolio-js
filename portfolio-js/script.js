const btnMobile = document.getElementById('btn-mobile');
const aLink1 = document.getElementById('link1')
const aLink2 = document.getElementById('link2')
const aLink3 = document.getElementById('link3')


function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
    aLink1.addEventListener('click', () => {
        nav.classList.remove('active')
    })     
    aLink2.addEventListener('click', () => {
        nav.classList.remove('active')
    }) 
    aLink3.addEventListener('click', () => {
        nav.classList.remove('active')
    }) 
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const ContainerDiv = document.getElementById('grid')

fetch('https://api.github.com/users/Kato2004/repos')
    .then((resp) => resp.json())
    .then( function(data){
        getResponse(data)
    })
    .catch(function(error){
        console.log(error)
    })
    
    const getResponse = (ArrayItems) => {
        ArrayItems.map(( value ) => {
            //Criando elementos e atribuindo classes a eles
            const DivPrinc = document.createElement('div')
            DivPrinc.classList.add('projects-grid-item')
            const NameProjectH3 = document.createElement('h3')
            const DescriptionP = document.createElement('p')
            const DivLink = document.createElement('div')
            const LinkProjectA = document.createElement('a')
        
            //Colocando os items dentro do HTML
            ContainerDiv.appendChild(DivPrinc)
            DivPrinc.appendChild(NameProjectH3)
            DivPrinc.appendChild(DescriptionP)
            DivLink.appendChild(LinkProjectA)
            DivPrinc.appendChild(DivLink)
            
            //Nome do repositorio
            NameProjectH3.innerHTML = value.name
            //Descrição
            let valueDescription = value.description
            if(valueDescription === null){
                DescriptionP.innerText = ""
            }else{
                DescriptionP.innerHTML = valueDescription
            }
            //Link no GitHub
            LinkProjectA.href = value.html_url
            LinkProjectA.target = '_blank'
            LinkProjectA.innerHTML = "Para ver clique aqui"
        })
    }
