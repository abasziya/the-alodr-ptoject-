import React , {Component} from "react";
import axios from "axios";


class CodeBox extends Component {
    constructor (props) {
        super(props)
        this.state = {
            time : {},
            seconds : this.props.time,
        }

        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }


    secondsToTime(secs){
        // let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "m": minutes,
          "s": seconds
        };
        return obj;
    }

    componentDidMount (){
      this.startTimer()
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }


    startTimer() {
        if (this.timer == 0 && this.state.seconds >= 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
    }


    countDown = () => {
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        
        if (seconds == 0) { 
          clearInterval(this.timer);
          
        }
    }

    componentDidUpdate = (prevProps , preveState) => {
        console.log(prevProps)
        console.log(preveState)
        // this.startTimer()

        // if(prevProps.time == 0)
        // {
        //     this.setState({
        //         seconds : preveState.seconds
        //     })
        // }

    }
    render() { 
        return (
            <span>پیامک شد ({this.state.time.s} ثانیه تا ارسال مجدد)</span>
        );
    }
}
 
export default CodeBox;