function podWebPlayer() {
    var self = this;
    
    /*
      como usuário, 
      quero carregar o podcast no player,
      para ouví-lo.      
    */
    self.CarregarPodCast = function(url){
        return true;  
    };
    
    /*
      como usuário, 
      quero visualizar os podcasts que já ouvi logo que eu carregá-los,
      para controlar os que já foram ouvidos.      
    */
    self.MarcarPodCastCarregados = function(url){
        return true;  
    };

    /*
      como usuário, 
      quero adicionar os podcasts em uma Lista de Execução
      para tocar vários podcasts seguidos.      
    */
    self.AdicionarPodCastNaListaDeExecucao = function(lista,podcast){
        return true;  
    };
    
    /*
      como usuário, 
      quero excluir os podcasts de uma Lista de Execução
      para não ter esse podcast na lista.      
    */
    self.ExcluirPodCastNaListaDeExecucao = function(lista,podcast){
        return true;  
    };
    
    /*
      como usuário, 
      quero criar uma Lista de Execução persistida em banco 
      para tocar as listas músicas ordenadas no futuro.      
    */
    self.CriarListaDeExecucao = function(nomeDaLista){
        return true;  
    };
    
    /*
      como usuário, 
      quero excluir uma Lista de Execução persistida em banco 
      para apagar as listas de músicas ordenadas.      
    */
    self.ExcluirListaDeExecucao = function(url){
        return true;  
    };

}