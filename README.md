# Programação Reativa
Nesse resumo, apresentarei algumas definições para programação reativa, citando o próprio Manifesto Reativo, buscando remover algumas das principais dúvidas que percorrem esse campo do desenvolvimento. Além disso, ao fim, apresentarei alguns exemplos a fim de fixar essas ideias iniciais em torno do desenvovolviemto reativo. 

## O que é programação reativa?
É um modelo ou paradigma de programação orientado no fluxo de dados e propagação de mudanças. Assim, é possível expressar (notificar) dinamicamente fluxos de dados através de linguagens de programação, sendo fundamental, nesse sentido, a automática notificação (propagação) de mudanças.


Em termos práticos, um fluxo de dados na programação reativa será propagada para os demais componentes de maneira estrutural.


Para ser, então, reativo o software precisa ser Responsivo, Resiliente, Elástico e ser Guiado por mensageria.                                       


## Hands-on!
Todos os conceitos serão apresentados com base na diferenciação de dois recursos importantes do RxJS: Promisses e Observables.


### Promisse:
![](assets/promise1.png)
Na promise, o dado é lançado no momento em que a ela é resolvida e, então, se recepcionada (e não for rejeitada), no momento em que o .then() é acionada, o valor da promise é passado. Seguindo esse fluxo:

<img src="https://www.freecodecamp.org/news/content/images/2020/06/Ekran-Resmi-2020-06-06-12.21.27.png" style="  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;" > 

Resultado do código acima no console:

<img src="assets/Captura%20de%20tela%202022-04-14%20150348.png" width="250" style="display: block; margin: 0 auto" >

### Observable:
Para os observables, o dado é lançado e recepcionado da seguinte maneira:
![](assets/obs1.png)

Resultado no console:

<img src="assets/obs2.png" style="display: block; margin: 0 auto" > 

> 💡 **Tip:** Perceba que os observables podem lançar mais de um tipo de dado, já nas promises, só se resolve (lança algum dado) uma única vez.

## Compartilhamento de estado
A promisse possui estado compartilhado com suas 'inscrições', já o Observable não. Isto é, sempre que um '.then'é chamado de uma promisse, todo o mesmo resultado é resolvido; já para os observables, sempre que há um '.subscribe' em um observável, todo o bloco é reexecutado (desde a emissão, até a recepção do dado).





## Cancelamento

| Promisse      | Observable  |
| ----------- | ----------- |
| assíncrono    |  síncrono ou assíncrono |


O cancelamento de promise só pode ser feito com o uso de algiumas bibliotecas. Mas, nativamente, o observable, possui este comportamento para o cancelamento: 

<img src="assets/obs3.png" style="  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;" > 

Nesse caso, se não houvesse o cancelamento através do unsubscribe(), os avlores seriam enviados infinitamente, mas, após 5 segundos, o observable é cancelado e, portanto, o envio é pausado. Veja:

![](assets/cancelamento-obs.gif)

### Referências bibliográficas  
-  [Real Time Programming: Special Purpose or General Purpose Languages [1989]](https://www-sop.inria.fr/members/Gerard.Berry/Papers/Berry-IFIP-89.pdf)
-  [5 Things to Know About Reactive Programming](https://developers.redhat.com/blog/2017/06/30/5-things-to-know-about-reactive-programming#:~:text=Reactive%20programming%20is%20simply%20to,in%20a%20sequence%20over%20time)
-  [The Reactive Manifesto](https://www.reactivemanifesto.org/)
-  [What is Reactive Programming](https://medium.com/@kevalpatel2106/what-is-reactive-programming-da37c1611382)
  
- https://www.markdownguide.org/extended-syntax/
  
- https://reactivex.io/
  
- https://www.youtube.com/watch?v=hrSYyr2sUac&list=PLJYZJYNervmPUrNb-mHh7ct8c21R8nWqn
  
- https://youtu.be/OssqXGdmbAE