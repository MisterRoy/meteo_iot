

export default function getCurrentDate()
{
  const date = new Date();
  const dayName = getDayName(date.getDay());
  const day = date.getDate();
  const monthName = getMonthName(date.getMonth());
  const year = date.getFullYear();

  return `${dayName}, ${day} ${monthName}`
}

function getDayName(dayNumber)
{
  switch(dayNumber){
    default:
    case 0:
      return 'Dimanche';
    case 1:
      return 'Lundi';
    case 2:
      return 'Mardi';
    case 3:
      return 'Mercredi';
    case 4:
      return 'Jeudi';
    case 5:
      return 'Vendredi';
    case 6:
      return 'Samedi';
  }
}

function getMonthName(monthNumber){
  switch(monthNumber){
    default:
    case 0:
      return 'Janvier';
    case 1:
      return 'Février';
    case 2:
      return 'Mars';
    case 3:
      return 'Avril';
    case 4:
      return 'Mai';
    case 5:
      return 'Juin';
    case 6:
      return 'Juillet';
    case 7:
      return 'Août';
    case 8:
      return 'Septembre';
    case 9:
      return 'Octobre';
    case 10:
      return 'Novembre';
    case 11:
      return 'Décembre';
  }
}