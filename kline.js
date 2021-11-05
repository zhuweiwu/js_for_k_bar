function loadData()
{

    loadDataFromFile();
  
}

function loadFileFromTest()
{
  var dataArr = 
  [
    ["2017/10/1", [2320.26,2302.6,2287.3,2362.94]],
    ["2017/10/2", [2300,2291.3,2288.26,2308.38]],
    ["2017/10/3", [2295.35,2346.5,2295.35,2346.92]],
    ["2017/10/4", [2347.22,2358.98,2337.35,2363.8]],
    ["2017/10/5", [2360.75,2382.48,2347.89,2383.76]],
    ["2017/10/6", [2383.43,2385.42,2371.23,2391.82]],
    ["2017/10/7", [2377.41,2419.02,2369.57,2421.15]],
    ["2017/10/8", [2425.92,2428.15,2417.58,2440.38]],
    ["2017/10/9", [2411,2433.13,2403.3,2437.42]],
    ["2017/10/10", [2432.68,2434.48,2427.7,2441.73]],
    ["2017/10/11", [2430.69,2418.53,2394.22,2433.89]],
    ["2017/10/12", [2416.62,2432.4,2414.4,2443.03]],
    ["2017/10/13", [2441.91,2421.56,2415.43,2444.8]],
    ["2017/10/14", [2420.26,2382.91,2373.53,2427.07]],
    ["2017/10/15", [2383.49,2397.18,2370.61,2397.94]],
    ["2017/10/16", [2378.82,2325.95,2309.17,2378.82]],
    ["2017/10/17", [2322.94,2314.16,2308.76,2330.88]],
    ["2017/10/18", [2320.62,2325.82,2315.01,2338.78]],
    ["2017/10/19", [2313.74,2293.34,2289.89,2340.71]],
    ["2017/10/20", [2297.77,2313.22,2292.03,2324.63]],
    ["2017/10/21", [2322.32,2365.59,2308.92,2366.16]],
    ["2017/10/22", [2364.54,2359.51,2330.86,2369.65]],
    ["2017/10/23", [2332.08,2273.4,2259.25,2333.54]],
    ["2017/10/24", [2274.81,2326.31,2270.1,2328.14]],
    ["2017/10/25", [2333.61,2347.18,2321.6,2351.44]],
    ["2017/10/26", [2340.44,2324.29,2304.27,2352.02]],
    ["2017/10/27", [2326.42,2318.61,2314.59,2333.67]],
    ["2017/10/28", [2314.68,2310.59,2296.58,2320.96]],
    ["2017/10/29", [2309.16,2286.6,2264.83,2333.29]],
    ["2017/10/30", [2282.17,2263.97,2253.25,2286.33]],
    ["2017/11/1", [2320.26,2302.6,2287.3,2362.94]],
    ["2017/11/2", [2300,2291.3,2288.26,2308.38]],
    ["2017/11/3", [2295.35,2346.5,2295.35,2346.92]],
    ["2017/11/4", [2347.22,2358.98,2337.35,2363.8]],
    ["2017/11/5", [2360.75,2382.48,2347.89,2383.76]],
    ["2017/11/6", [2383.43,2385.42,2371.23,2391.82]],
    ["2017/11/7", [2377.41,2419.02,2369.57,2421.15]],
    ["2017/11/8", [2425.92,2428.15,2417.58,2440.38]],
    ["2017/11/9", [2411,2433.13,2403.3,2437.42]],
    ["2017/11/10", [2432.68,2434.48,2427.7,2441.73]],
    ["2017/11/11", [2430.69,2418.53,2394.22,2433.89]],
    ["2017/11/12", [2416.62,2432.4,2414.4,2443.03]],
    ["2017/11/13", [2441.91,2421.56,2415.43,2444.8]],
    ["2017/11/14", [2420.26,2382.91,2373.53,2427.07]],
    ["2017/11/15", [2383.49,2397.18,2370.61,2397.94]],
    ["2017/11/16", [2378.82,2325.95,2309.17,2378.82]],
    ["2017/11/17", [2322.94,2314.16,2308.76,2330.88]],
    ["2017/11/18", [2320.62,2325.82,2315.01,2338.78]],
    ["2017/11/19", [2313.74,2293.34,2289.89,2340.71]],
    ["2017/11/20", [2297.77,2313.22,2292.03,2324.63]],
    ["2017/11/21", [2322.32,2365.59,2308.92,2366.16]],
    ["2017/11/22", [2364.54,2359.51,2330.86,2369.65]],
    ["2017/11/23", [2332.08,2273.4,2259.25,2333.54]],
    ["2017/11/24", [2274.81,2326.31,2270.1,2328.14]],
    ["2017/11/25", [2333.61,2347.18,2321.6,2351.44]],
    ["2017/11/26", [2340.44,2324.29,2304.27,2352.02]],
    ["2017/11/27", [2326.42,2318.61,2314.59,2333.67]],
    ["2017/11/28", [2314.68,2310.59,2296.58,2320.96]],
    ["2017/11/29", [2309.16,2286.6,2264.83,2333.29]],
    ["2017/11/30", [2282.17,2263.97,2253.25,2286.33]]
  ];

  let canvas = document.getElementById('mycanvas');
  drawCanvas(canvas, dataArr);

}

function loadDataFromFile()
{
  let barperiod = 1800;//period based on second

  let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
        // you can use this method to get file and perform respective operations
                let files =   Array.from(input.files);
                let file = files[0];
                console.log(file.name);
                let reader = new FileReader();

                reader.readAsText(file);

                reader.onload = function() {
                  let tickdata = reader.result.split(/[\r\n]+/g);
                  let bars = buildBar(tickdata, barperiod);
                  let dataArr = formatData(bars);
                  let canvas = document.getElementById('mycanvas');
                  drawCanvas(canvas, dataArr);
                };
              
                reader.onerror = function() {
                  console.log(reader.error);
                };
            };
    input.click();
}


function drawCanvas(canvas, dataArr)
{
  let ctx;
  let cWidth, cHeight, cMargin, cSpace;
  let originX, originY;

  let bMargin, totalBars, bWidth, maxValue, minValue;

  let totalYNumber;
  let showArr;

  let dragBarX, dragBarWidth;

  let ctr, numctr, speed;

  let mousePosition = {};
  ctx = canvas.getContext("2d");
  let cbox = document.getElementById('cbox');
  //set canvas background-color
  canvas.back
  
  initCanvas();
  function initCanvas()
  {

    cMargin = 60;

    //cSpace = 80;

    cSpace = 80;

    console.log("cbox width = " + cbox.offsetWidth + ", height=" + cbox.offsetHeight);
    console.log("canvas width = " + canvas.width + ", height=" + canvas.height);

    //将canvas扩大2倍，然后缩小，以适应高清屏幕
    canvas.width = cbox.offsetWidth* 2 ;
    canvas.height = cbox.offsetHeight* 2;
    canvas.style.height = canvas.height/2 + "px";
    canvas.style.width = canvas.width/2 + "px";
    cHeight = canvas.height - cMargin*2-cSpace*2;
    cWidth = canvas.width - cMargin*2-cSpace*2;
    originX = cMargin + cSpace;
    originY = cMargin + cHeight;

    console.log("canvas width = " + canvas.width + ", height=" + canvas.height);

    console.log("org point X=" + originX + ", Y=" + originY);

    showArr = dataArr.slice( 0,parseInt(dataArr.length/2) );
 
    // 柱状图信息
    tobalBars = showArr.length;
    bWidth = parseInt( cWidth/tobalBars/3);
    bMargin = parseInt( (cWidth-bWidth*tobalBars)/(tobalBars+1) );
    //算最大值，最小值
    maxValue = 0;
    minValue = 9999999;
    for(var i=0; i<dataArr.length; i++){
        var barVal =  dataArr[i][1][1] ;
        if( barVal > maxValue ){
            maxValue = barVal;
        }
        var barVal2 =  dataArr[i][1][2] ;
        if( barVal2 < minValue ){
            minValue = barVal2;
        }
    }

    console.log("minValue=" + minValue + ",maxValue=" + maxValue);


    //maxValue += maxValue* 0.1; //上面预留20的空间
    //minValue -= minValue * 0.1; //下面预留20的空间

    console.log("minValue=" + minValue + ",maxValue=" + maxValue);

    totalYNomber = 10;
    // 运动相关
    ctr = 1;
    numctr = 50;
    speed = 2;

    dragBarWidth = 30;
    dragBarX = cWidth/2+cSpace+cMargin-dragBarWidth/2;  
  }
  
  drawLineLabelMarkers(); // 绘制图表轴、标签和标记
  // 绘制图表轴、标签和标记
  function drawLineLabelMarkers(){
      ctx.font = "24px Arial";
      ctx.lineWidth = 2;
      ctx.fillStyle = "#b2b5be";
      ctx.strokeStyle = "#b2b5be";
      // y轴
      drawLine(originX, originY, originX, cMargin);
      // x轴
      drawLine(originX, originY, originX+cWidth, originY);

      // 绘制标记
      drawMarkers();

      // 画线的方法
      function drawLine(x, y, X, Y){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(X, Y);
        ctx.stroke();
        ctx.closePath();
      }

      // 绘制标记
      function drawMarkers(){
          ctx.strokeStyle = "#b2b5be";
          // 绘制 y
          var oneVal = (maxValue-minValue)/totalYNomber;
          ctx.textAlign = "right";
          for(var i=0; i<=totalYNomber; i++){
              var markerVal =  parseInt(i*oneVal+minValue) / 100000.0;
              var markerLineVal = parseInt(i*oneVal+minValue);
              var xMarker = originX-10;
              var yMarker = parseInt( originY-cHeight*(markerLineVal-minValue)/(maxValue-minValue));

              ctx.fillText(markerVal, xMarker, yMarker+3, cSpace); // 文字

              if(i>0)
              {
                  drawLine(originX+2, yMarker, originX+cWidth, yMarker);
              }
          }

          // 绘制 x
          var textNb = 6;
          ctx.textAlign = "center";
          for(var i=0; i<tobalBars; i++){
              if(tobalBars>textNb &&  i%parseInt(tobalBars/6) != 0 ){
                  continue;
              }
              var markerVal = dataArr[i][0];
              var xMarker = parseInt( originX+cWidth*(i/tobalBars)+bMargin+bWidth/2 );
              var yMarker = originY+30;
              ctx.fillText(markerVal, xMarker, yMarker, cSpace); // 文字
          }
          // 绘制标题 y
          ctx.save();
          ctx.rotate(-Math.PI/2);
          ctx.fillText("指 数", -canvas.height/2, cSpace-20);
          ctx.restore();
          // 绘制标题 x
          ctx.fillText("日 期", originX+cWidth/2, originY+cSpace-20);
      };
  }

  drawBarAnimate(); // 绘制柱状图的动画
  //绘制k形图
  function drawBarAnimate(mouseMove){
      var parsent = ctr/numctr;
      for(var i=0; i<tobalBars; i++){
          //var oneVal = parseInt(maxValue/totalYNomber);
          var data = dataArr[i][1];
          var color = "#F44336";//red for down
          var barVal = data[0];
          var disY = 0;
          //open high low close
          if(data[3]>data[0])
          { 
            color = "#26A69A";//green for up
            barVal = data[3];
            disY = data[3]-data[0];
          }
          else
          {
            disY = data[0]-data[3];
          }

          var showH = disY/(maxValue-minValue)*cHeight*parsent;
          showH = showH>2 ? showH : 2;
          
          var barH = parseInt(cHeight*(barVal-minValue)/(maxValue-minValue));//?has problem
          console.log("index=" + i + ",disY="+disY + ",showH=" + showH + ",barH=" + barH);
          var y = originY - barH;
          var x = originX + ((bWidth+bMargin)*i + bMargin)*parsent;

          drawRect( x, y, bWidth, showH, mouseMove, color,true);  //开盘收盘  高度减一避免盖住x轴

          //最高最低的线
          showH = (data[1]-data[2])/(maxValue-minValue)*cHeight*parsent;
          showH = showH>2 ? showH : 2 ;

          y = originY - parseInt(cHeight*(data[1]-minValue)/(maxValue-minValue));
          drawRect( parseInt(x+bWidth/2-1), y, 2, showH, mouseMove, color);  //最高最低  高度减一避免盖住x轴
      }
      if(ctr<numctr){
          ctr++;
          setTimeout(function(){
              ctx.clearRect(0,0,canvas.width, canvas.height);
              drawLineLabelMarkers();
              drawBarAnimate();
              //drawDragBar();
          }, speed*=0.03);
      }
  }

  //绘制方块
  function drawRect( x, y, X, Y, mouseMove, color, ifBigBar,ifDrag){

      ctx.beginPath();

      if( parseInt(x)%2 !== 0){  //避免基数像素在普通分辨率屏幕上出现方块模糊的情况
          x += 1;
      }
      if( parseInt(y)%2 !== 0){
          y += 1;
      }if( parseInt(X)%2 !== 0){
          X += 1;
      }
      if( parseInt(Y)%2 !== 0){
          Y += 1;
      }
      ctx.rect( parseInt(x), parseInt(y), parseInt(X), parseInt(Y) );

      if(ifBigBar && mouseMove && ctx.isPointInPath(mousePosition.x*2, mousePosition.y*2)){ //如果是鼠标移动的到柱状图上，重新绘制图表
          ctx.strokeStyle = color;
          ctx.strokeWidth = 20;
          ctx.stroke();
      }
      //如果移动到拖动选择范围按钮
      canvas.style.cursor = "default";
      if(ifDrag && ctx.isPointInPath(mousePosition.x*2, mousePosition.y*2)){ //如果是鼠标移动的到调节范围按钮上，改变鼠标样式
          //console.log(123);
          canvas.style.cursor = "all-scroll";
      }
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();

  }
}


function buildBar(tickdata, barperiod)
{
    let bars = [];
    if(tickdata.length == 0)
    {
        return bars;
    }

    let length = tickdata.length;
    let isfirst = true;
    let time;
    let ask;
    let bid;

    //process first tick
    let firstline = tickdata[0];

    let firststrs = tickdata[0].split(',');
        
    if(firststrs.length == 4)
    {
      time = moment(firststrs[0] + " " + firststrs[1], "MM/DD/YYYY HH:mm:ss");
      bid = Number(firststrs[2]);
      ask = Number(firststrs[3]);
    }
    else if(firststrs.length == 5)
    {
      //time = new Date(firststrs[0] + " " + firststrs[1] + "." + firststrs[2]);
      time = moment(firststrs[0] + " " + firststrs[1] + "." + firststrs[2], "MM/DD/YYYY HH:mm:ss.SSS");
      bid = Number(firststrs[3]);
      ask = Number(firststrs[4]);
    }


    if(time.hour() >= 16)
    {
      //let modifyTime = time.hour(16).minute(0).second(0).millisecond(0);
      //console.log(time.format("MM/DD/YYYY HH:mm:ss.SSS"))

      // let modifyTime = time.milliseconds(0);
      //both time and modifytime change
      // console.log(modifyTime.format("MM/DD/YYYY HH:mm:ss.SSS") +",before:" + time.format("MM/DD/YYYY HH:mm:ss.SSS"))

      let modifyTime = moment(time).milliseconds(0);
      //only modifytime change
      //console.log(modifyTime.format("MM/DD/YYYY HH:mm:ss.SSS") +",before:" + time.format("MM/DD/YYYY HH:mm:ss.SSS"))

      let firstBar = new Bar(modifyTime, bid, ask);
      bars.push(firstBar);
    }
    else
    {
      //let modifyTime = time.hour(16).minute(0).second(0).millisecond(0).add(-1, 'days');
      let modifyTime = time.set({hour:16, minute:0, second:0, millisecond:0}).add(-1, 'days');
      let firstBar = new Bar(modifyTime, bid, ask);
      bars.push(firstBar);
    }

    //console.log(bars[0].toString());
    

    for(var i=0; i<length; i++)
    {
        let strs = tickdata[i].split(',');
        
        if(strs.length == 4)
        {
          time = moment(strs[0] + " " + strs[1], "MM/DD/YYYY HH:mm:ss");
          bid = Number(strs[2]);
          ask = Number(strs[3]);
        }
        else if(strs.length == 5)
        {
          time = moment(strs[0] + " " + strs[1] + "." + strs[2], "MM/DD/YYYY HH:mm:ss.SSS");
          bid = Number(strs[3]);
          ask = Number(strs[4]);
        }
        else
        {
          continue;
        }

        let duration = moment.duration(time.diff(bars[bars.length-1].time));

        if(duration.asSeconds() >= barperiod)
        {
          let nextperiodTime= moment(bars[bars.length-1].time);
          while(moment.duration(time.diff(nextperiodTime)).asSeconds() >= barperiod)
          {
            nextperiodTime = moment(nextperiodTime).add(barperiod, "seconds");
            let addBar = new Bar(nextperiodTime, bars[bars.length-1].bidClose, bars[bars.length-1].askClose);
            bars.push(addBar);
          }
          bars[bars.length-1].upate(bid,ask);
        }
        else
        {
          bars[bars.length-1].upate(bid, ask);
        }
    }
    return bars;
}


function formatData(bars)
{
  let dataArr = [];
  if(bars.length == 0)
  {
    return null;
  }

  for(var i=0; i<bars.length; i++)
  {
    var temp = [ bars[i].time.format("MM/DD/YYYY HH:mm:ss") , 
                [parseInt(bars[i].askOpen * 100000), parseInt(bars[i].askHigh * 100000), 
                 parseInt(bars[i].askLow* 100000), parseInt(bars[i].askClose * 100000)]
               ];

    dataArr.push(temp);
  }

  for(var i=0; i<bars.length; i++)
  {
    console.log(bars[i].toString());

  }
  return dataArr;
}

class Bar
{

  constructor(time, bid, ask)
  {
    this.bidOpen = bid;
    this.bidHigh = bid;
    this.bidLow = bid;
    this.bidClose = bid;
    this.askOpen = ask;
    this.askHigh = ask;
    this.askLow = ask;
    this.askClose = ask;
    this.time = time;
  }

  upate(bid, ask)
  {
    //update high
    this.askHigh = this.askHigh > ask ? this.askHigh : ask;
    this.bidHigh = this.bidHigh > bid ? this.bidHigh : bid;

    //update low 
    this.askLow = this.askLow < ask ? this.askLow : ask;
    this.bidLow = this.bidLow < bid ? this.bidLow : bid;

    //update close
    this.askClose = ask;
    this.bidClose = bid;
  }

  // GoT.prototype.toString = function() { 
  //   return ''+this.name;
  // }
  toString()
  {
    //
    
    let res =  this.time.format("MM/DD/YYYY HH:mm:ss.SSS")+","+
            this.bidOpen +","+
            this.bidHigh+","+
            this.bidLow + "," + 
            this.bidClose+ "," + 
            this.askOpen + "," + 
            this.askHigh+ "," + 
            this.askLow + "," + 
            this.askClose;

    return res;
  }


  clone()
  {
    let newBar = new Bar(moment(this.time), this.askOpen, this.bidOpen);
    newBar.askOpen = this.askOpen;
    newBar.askHigh = this.askHigh;
    newBar.askLow = this.askLow;
    newBar.askClose = this.askClose;
    newBar.bidOpen = this.bidOpen;
    newBar.bidHigh = this.bidHigh;
    newBar.bidLow = this.bidLow;
    newBar.bidClose = this.bidClose;
    return newBar;
  }
}

Bar.prototype.toString = function()
{
  let res =  this.time.format("MM/DD/YYYY HH:mm:ss.SSS")+","+
  this.bidOpen +","+
  this.bidHigh+","+
  this.bidLow + "," + 
  this.bidClose+ "," + 
  this.askOpen + "," + 
  this.askHigh+ "," + 
  this.askLow + "," + 
  this.askClose;

  return res;
}
