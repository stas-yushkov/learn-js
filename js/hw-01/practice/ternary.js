{// ДЗ на  тернарные
  const loginRight                = '1111'; //это логин. лень долго вводить ручками при тесте
  const passwordRight             = '2222'; //это пароль. лень долго вводить ручками при тесте
  
  let loginEntered = null; 
  let passwordEntered = null; 
  
  const messageNeedLogin          = 'введи логин';
  const messageNeedPasswd         = 'введи пароль';
  const messageGreeting           = 'здоров. надо же, и логин и пароль верны';
  const messageCancelled          = 'отменено. чего было пытаться';
  const messageEnteredWrongPasswd = 'вспомнишь пароль, заходи';
  const messageEnteredWrongLogin  = 'я вас не знаю. Даже логин не помнишь, о чем тут говорить';

  (loginEntered = prompt(messageNeedLogin)) === loginRight ?
    
    ((passwordEntered = prompt(messageNeedPasswd)) === passwordRight ?
      console.log(messageGreeting) :
      
      ((passwordEntered === null) ?
          console.log('null',passwordEntered,messageCancelled) :
            
          (passwordEntered === '') ?
            console.log('nothing',passwordEntered,messageCancelled) :
                  
            console.log('somethingWrongPasswd',passwordEntered,messageEnteredWrongPasswd))) :
    
    ((loginEntered === null) ?
      console.log('null',loginEntered,messageCancelled) :
      
      ((loginEntered === '') ?
        console.log('nothing',loginEntered,messageCancelled) :
        
        console.log('somethingWrongLogin',loginEntered,messageEnteredWrongLogin)));
}//ДЗ на  тернарные