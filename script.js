function getCalendar() {
  // Determines how many events are happening in the next two hours.
  var calendar = CalendarApp.getCalendarById(
    '05m3dk4pmdldvn8oic4idjcmiur8bt87@import.calendar.google.com');


  //récupère les events sur 1 semaine
  var now = new Date();
  var backToTheFuture =  now.getDay();
  

  var Sunday = new Date(now.getTime() - ( backToTheFuture * 24 * 60 * 60 * 1000));
  var SundayPlusOne = new Date(Sunday.getTime() + ( 24 * 60 * 60 * 1000));
  
  var volumeHoraire = {"Math" : 6, 'PC': 6, 'ElNu' : 2, 'ElAn' : 2, 'Anglais' : 3, 'LV2' : 1, 'SI' : 2, 'Projet' : 2,     'Info' : 2, 'Methodo' : 1}
  var horaireDay = {"Math" : 0, 'PC': 0, 'ElNu' : 0, 'ElAn' : 0, 'Anglais' : 0, 'LV2' : 0, 'SI' : 0, 'Projet' : 0,     'Info' : 0, 'Methodo' : 0};
  for(let j = 0; j<5; j++){
    var day = new Date(Sunday.getTime() + (j * 24 * 60 * 60 * 1000))
    var second_day = new Date(Sunday.getTime() + ((j+1) * 24 * 60 * 60 * 1000))
    
    var events = CalendarApp.getCalendarById(
    '05m3dk4pmdldvn8oic4idjcmiur8bt87@import.calendar.google.com').getEvents(day, second_day);
    var time = events[0].getStartTime();
   
    
    for(let i = 0; i < events.length; i++)
    {
      var stud = events[i].getDescription();
      switch(stud){
        case 'AZZABI Lotfi':
          
          if(volumeHoraire.Math > 0 && horaireDay.Math ==0){
            horaireDay['Math'] = 0.5 + horaireDay.Math;
            volumeHoraire.Math = volumeHoraire.Math - 0.5;
          }
          break;
        case 'OUATTARA Issa':
          if(volumeHoraire.ElNu > 0  && horaireDay.ElNu ==0){
            horaireDay['ElNu'] = 0.5 + horaireDay.ElNu;
            volumeHoraire.ElNu = volumeHoraire.ElNu - 0.5;
          }
          break;
        case 'PLASSAIS Abigail':
         if(volumeHoraire.Anglais > 0 && horaireDay.Anglais ==0){
            horaireDay['Anglais'] = 0.5 + horaireDay.Anglais;
            volumeHoraire.Anglais = volumeHoraire.Anglais - 0.5;
          }
          break;
        case 'ARBOUX Valentin':
          if(volumeHoraire.Projet > 0 && horaireDay.Projet ==0){
            horaireDay['Project'] = 0.5 + horaireDay.Projet;
            volumeHoraire.Projet = volumeHoraire.Projet - 0.5;
          }
          break;
        case 'ROUFFIE Philippe':
          if(volumeHoraire.Methodo > 0 && horaireDay.Methodo ==0){
            horaireDay['Methodo'] = 0.5 + horaireDay.Methodo;
            volumeHoraire.Methodo = volumeHoraire.Methodo - 0.5;
          }
          break;
        case 'COLIN Vincent':
          if(volumeHoraire.SI > 0 && horaireDay.SI ==0){
            horaireDay['SI'] = 0.5 + horaireDay.SI;
            volumeHoraire.SI = volumeHoraire.SI - 0.5;
          }
          break;
        case 'WOODWARD Richard':
          if(volumeHoraire.Info > 0 && horaireDay.Info ==0){
            horaireDay['Info'] = 0.5 + horaireDay.Info;
            volumeHoraire.Info = volumeHoraire.Info - 0.5;
          }
          break;
        case 'VIERO Yannick':
          if(volumeHoraire.PC > 0 && horaireDay.PC ==0){
            horaireDay['PC'] = 0.5 + horaireDay.PC;
            volumeHoraire.PC = volumeHoraire.PC - 0.5;
          }
          break;
        case 'TIAN Ya Nan':
          if(volumeHoraire.LV2 > 0 && horaireDay.LV2 ==0){
            horaireDay['LV2'] = 0.5 + horaireDay.LV2;
            volumeHoraire.LV2 = volumeHoraire.LV2 - 0.5;
          }
          break;
        case 'BEN BOUBAKER BILEL':
          if(volumeHoraire.ElAn > 0 && horaireDay.ElAn ==0){
            horaireDay['ElAn'] = 0.5 + horaireDay.ElAn;
            volumeHoraire.ElAn = volumeHoraire.ElAn - 0.5;
          }
          break;
        
      }
    }

    
    var DayAfterAfter = new Date(second_day.getTime() + (24 * 60 * 60 * 1000));
    
    var events = CalendarApp.getCalendarById(
    '05m3dk4pmdldvn8oic4idjcmiur8bt87@import.calendar.google.com').getEvents(second_day, DayAfterAfter);
    for(let i = 0; i < events.length; i++)
    {
      var stud = events[i].getDescription();
      switch(stud){
        case 'AZZABI Lotfi':
          
          if(volumeHoraire.Math > 0  && horaireDay.Math ==0){
            horaireDay['Math'] = 1 + horaireDay.Math;
            volumeHoraire.Math = volumeHoraire.Math - 1;
          }
          break;
        case 'OUATTARA Issa':
          if(volumeHoraire.ElNu > 0  && horaireDay.ElNu ==0){
            horaireDay['ElNu'] = 1 + horaireDay.ElNu;
            volumeHoraire.ElNu = volumeHoraire.ElNu - 1;
          }
          break;
        case 'PLASSAIS Abigail':
         if(volumeHoraire.Anglais > 0  && horaireDay.Anglais ==0){
            horaireDay['Anglais'] = 1 + horaireDay.Anglais;
            volumeHoraire.Anglais = volumeHoraire.Anglais - 1;
          }
          break;
        case 'ARBOUX Valentin':
          if(volumeHoraire.Projet > 0 && horaireDay.Projet ==0){
            horaireDay['Projet'] = 1 + horaireDay.Projet;
            volumeHoraire.Projet = volumeHoraire.Projet - 1;
          }
          break;
        case 'ROUFFIE Philippe':
          if(volumeHoraire.Methodo > 0 && horaireDay.Methodo ==0){
            horaireDay['Methodo'] = 1 + horaireDay.Methodo;
            volumeHoraire.Methodo = volumeHoraire.Methodo - 1;
          }
          break;
        case 'COLIN Vincent':
          if(volumeHoraire.SI > 0 && horaireDay.SI ==0){
            horaireDay['SI'] = 1 + horaireDay.SI;
            volumeHoraire.SI = volumeHoraire.SI - 1;
          }
          break;
        case 'WOODWARD Richard':
          if(volumeHoraire.Info > 0 && horaireDay.Info ==0){
            horaireDay['Info'] = 1 + horaireDay.Info;
            volumeHoraire.Info = volumeHoraire.Info - 1;
          }
          break;
        case 'VIERO Yannick':
          if(volumeHoraire.PC > 0 && horaireDay.PC ==0){
            horaireDay['PC'] = 1 + horaireDay.PC;
            volumeHoraire.PC = volumeHoraire.PC - 1;
          }
          break;
        case 'TIAN Ya Nan':
          if(volumeHoraire.LV2 > 0 && horaireDay.LV2 ==0){
            horaireDay['LV2'] = 1 + horaireDay.LV2;
            volumeHoraire.LV2 = volumeHoraire.LV2 - 1;
          }
          break;
        case 'BEN BOUBAKER BILEL':
          if(volumeHoraire.ElAn > 0 && horaireDay.ElAn ==0){
            horaireDay['ElAn'] = 1 + horaireDay.ElAn;
            volumeHoraire.ElAn = volumeHoraire.ElAn - 1;
          }
          break;
        
      }
    }
    //set EdT
    second_day.setHours(18,0,0);
    if(j==3){
      second_day.setHours(14,0,0);
    }
    for(var key in horaireDay) {
      if(horaireDay[key] > 0){
        CalendarApp.getDefaultCalendar().createEvent(key,second_day,new Date(second_day.getTime() + horaireDay[key] * 60 * 60 * 1000));
        if(horaireDay[key]>0.5){second_day.setHours(second_day.getHours() + horaireDay[key])}
        else{second_day.setMinutes(second_day.getMinutes()+ (horaireDay[key]*60))}
      }
      Logger.log(second_day);

    }
    var horaireDay = {"Math" : 0, 'PC': 0, 'ElNu' : 0, 'ElAn' : 0, 'Anglais' : 0, 'LV2' : 0, 'SI' : 0, 'Projet' : 0,     'Info' : 0, 'Methodo' : 0};

  }
  
    
  
}