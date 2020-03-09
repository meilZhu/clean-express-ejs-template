/*
 * @fileName: 
 * @file: 
 * @Date: 2020-03-09 09:52:25
 * @author: manyao.zhu
 */
function login() {
  $.post('/try', $("#login").serializeArray(), function(res){
    console.log('index', res)
    if(res.status) {
      window.location.href = '/t1';
    }
  });
}