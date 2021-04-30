export default function Sugestoes(props){
    const PerfisSidebar=[{imagemPerfil:"assets/img/bad.vibes.memes.svg",nomePerfil:"bad.vibes.memes",razao:"Segue você"},{imagemPerfil:"assets/img/chibirdart.svg",nomePerfil:"chibirdart",razao:"Segue você"},
    {imagemPerfil:"assets/img/razoesparaacreditar.svg",nomePerfil:"razoesparaacreditar",razao:"Novo no Instagram"},{imagemPerfil:"assets/img/adorable_animals.svg",nomePerfil:"adorable_animals",razao:"Segue você"},
    {imagemPerfil:"assets/img/smallcutecats.svg",nomePerfil:"smallcutecats",razao:"Segue você"}];

    return(
    <div class= "sugestoes">
       {PerfisSidebar.map(item =>(
           <Sugestao imagemPerfil={item.imagemPerfil} nomePerfil={item.nomePerfil} razao={item.razao} />
       ))}; 
    </div>
    );
}



function Sugestao(props){
    return(
        <div class="sugestao">
        <div class="usuario">
          <img src={props.imagemPerfil} />
          <div class="texto">
            <div class="nome">{props.nomePerfil}</div>
            <div class="razao">{props.razao}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    );
}