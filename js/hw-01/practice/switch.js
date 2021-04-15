{// ДЗ на switch-case
  const loginRight                = '1111'; //это логин. лень долго вводить ручками при тесте
  const passwordRight             = '2222'; //это пароль. лень долго вводить ручками при тесте
  
  const messageNeedLogin          = 'введи логин';
  const messageNeedPasswd         = 'введи пароль';
  const messageGreeting           = 'здоров. надо же, и логин и пароль верны';
  const messageCancelled          = 'отменено. чего было пытаться';
  const messageEnteredWrongPasswd = 'вспомнишь пароль, заходи';
  const messageEnteredWrongLogin  = 'я вас не знаю. Даже логин не помнишь, о чем тут говорить';
  
  switch (prompt(messageNeedLogin)) {
    case loginRight:
      switch (prompt(messageNeedPasswd)) {
        case passwordRight:
          console.log(messageGreeting)
        break;
          
        case null:
          console.log(messageCancelled)
          break;
        
        case "":
          console.log(messageCancelled)
        break;
        
        
        default:
          console.log(messageEnteredWrongPasswd)
        break;
      }
    break;
            
    case null:
      console.log(messageCancelled);
    break;
            
    case "":
      console.log(messageCancelled);
    break;
              
    default:
      console.log(messageEnteredWrongLogin);
    break;
  }
}// ДЗ на switch-case       