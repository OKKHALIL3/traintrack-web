import { mkdirSync, writeFileSync } from 'node:fs'
const G = {
  T:['█████','  █  ','  █  ','  █  ','  █  '], R:['████ ','█   █','████ ','█  █ ','█   █'],
  A:[' ███ ','█   █','█████','█   █','█   █'], I:['███',' █ ',' █ ',' █ ','███'],
  N:['█   █','██  █','█ █ █','█  ██','█   █'], C:[' ████','█    ','█    ','█    ',' ████'],
  K:['█   █','█  █ ','███  ','█  █ ','█   █'],
}
const W='TRAINTRACK'.split(''), CELL=18, GAP=1, ROWS=5
let cols=0; W.forEach((c,i)=>{cols+=G[c][0].length; if(i<W.length-1)cols+=GAP})
const wmW=cols*CELL, wmH=ROWS*CELL
let rects='', x=0
for(const ch of W){const g=G[ch],w=g[0].length
  for(let r=0;r<ROWS;r++)for(let c=0;c<w;c++)if(g[r][c]==='█')
    rects+=`<rect x="${(x+c)*CELL}" y="${r*CELL}" width="${CELL}" height="${CELL}" rx="3" fill="url(#g)"/>`
  x+=w+GAP}
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${wmW}" height="${wmH}" viewBox="0 0 ${wmW} ${wmH}" fill="none">
<defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${wmW}" y2="0">
<stop offset="0" stop-color="#4F8CFF"/><stop offset="0.5" stop-color="#A06CFF"/><stop offset="1" stop-color="#FF5F9E"/>
</linearGradient></defs>${rects}</svg>`
mkdirSync('public/assets', { recursive: true })
writeFileSync('public/assets/wordmark.svg', svg)
console.log('wrote public/assets/wordmark.svg', wmW+'x'+wmH)
