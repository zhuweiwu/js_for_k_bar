function loadData()
{
    let barperiod = 60;//period based on second


    //test moment
    //let now = moment();


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
                };
              
                reader.onerror = function() {
                  console.log(reader.error);
                };
            };
    input.click();
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

    bars.forEach(function(bar)
    {
      console.log(bar.toString());
    });

    return bars;
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
