export default function Posts(){
const Info=[{imagemPerfil:"assets/img/meowed.svg",usuario:"meowed",imagemConteudo:"assets/img/gato-telefone.svg",imagemPerfilCuritidas:"assets/img/respondeai.svg",perfil:"respondeai",PessoasCurtiram:"101.523"},
            {imagemPerfil:"assets/img/barked.svg" ,usuario:"barked",imagemConteudo:"assets/img/dog.svg",imagemPerfilCuritidas:"assets/img/adorable_animals.svg",perfil:"adorable_animals",PessoasCurtiram:"99.159"}];


return(
    <div class="posts">

{Info.map(item =>(
   <div class="post">
   <TopoPost imagemPerfil={item.imagemPerfil} usuario={item.usuario}/>
   <ConteudoPost imagemConteudo={item.imagemConteudo}/>
  <div class="fundo">
  <Acoes/>
  <Curtidas imagemPerfilCuritidas={item.imagemPerfilCuritidas} perfil={item.perfil} PessoasCurtiram={item.PessoasCurtiram}/>
  </div>
</div> 
  ))}
  </div>
);
} 



function TopoPost(props){
    return(
        <div class="topo">
        <div class="usuario">
          <img src={props.imagemPerfil} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
    );
}

function ConteudoPost(props){
    return(
    <div class="conteudo">
    <img src={props.imagemConteudo}/>
  </div>
    );
}

function Acoes(){
    return(
        <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>
    );
}

function Curtidas(props){
    return(
        <div class="curtidas">
        <img src={props.imagemPerfilCuritidas} />
        <div class="texto">
          Curtido por <strong>{props.perfil}</strong> e <strong>outras {props.PessoasCurtiram} pessoas</strong>
        </div>
      </div>
    );
}



