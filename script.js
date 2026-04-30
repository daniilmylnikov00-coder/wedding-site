function updateTimer(){
  const box=document.querySelector('.timer');
  const target=new Date(box.dataset.date).getTime();
  let diff=Math.max(0,target-Date.now());
  const week=7*24*60*60*1000, day=24*60*60*1000, hour=60*60*1000, min=60*1000;
  const weeks=Math.floor(diff/week); diff-=weeks*week;
  const days=Math.floor(diff/day); diff-=days*day;
  const hours=Math.floor(diff/hour); diff-=hours*hour;
  const minutes=Math.floor(diff/min); diff-=minutes*min;
  const seconds=Math.floor(diff/1000);
  const pad=n=>String(n).padStart(2,'0');
  weeksEl=document.getElementById('weeks');
  weeksEl.textContent=pad(weeks); document.getElementById('days').textContent=pad(days);
  document.getElementById('hours').textContent=pad(hours); document.getElementById('minutes').textContent=pad(minutes);
  document.getElementById('seconds').textContent=pad(seconds);
}
updateTimer(); setInterval(updateTimer,1000);
