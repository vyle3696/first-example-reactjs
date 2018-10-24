import React from 'react';
import './Home.css';
import './ItemProjectUpSlide.css';
import $ from 'jquery';

var isFirstSlide = true;
class ItemProjectUpSlide extends React.Component{
    constructor(props){
        super(props);   
        this.state = {
            imgRoot: {bran: "no"},
            indexBackground: 0

        }

        this.initNewPreview = this.initNewPreview.bind(this);

        this.closeDetail = this.closeDetail.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.onShowDone = this.onShowDone.bind(this);
        this.closeDone = this.closeDone.bind(this);
        this.imgCloseDown = this.imgCloseDown.bind(this);
        this.onNextSlide = this.onNextSlide.bind(this);
        this.onPreSlide = this.onPreSlide.bind(this);
        this.checkSlide = this.checkSlide.bind(this);
        
    }

    componentDidMount(){
        this.initNewPreview()
        this.showDetail();
    }



    initNewPreview(){
        isFirstSlide = true;
        $("#img-item-0").attr('src', this.props.content.listBackgroundUrl[0]);
        this.state.indexBackground = 0;
        $(".img-original").css("opacity", 0);
    }


    switchImg(){
        $("#img-temp").css("opacity", 1);
        $("#img-item-0").css("opacity", 0);
    }

    unSwitchImg(){
        $("#img-item-0").css("opacity", 1);
        $("#img-temp").css("opacity", 0);
        
    }

    showDetail(){
        $(".preview").css("display", "grid");
        $(".description").css("display", "flex");
        $(".overlay").css("opacity", 1);
        this.switchImg();
        this.state.imgRoot = $("#img-project-"+this.props.content.id);
        //var imgRoot = $("#img-project-"+this.props.content.id);

        $("#img-temp").css({"top": this.state.imgRoot.offset().top - $(window).scrollTop(), "left": this.state.imgRoot.offset().left - $(window).scrollLeft(), height: this.state.imgRoot.outerHeight(), width: this.state.imgRoot.outerWidth()});
        $("#img-temp").attr("src",this.props.content.backgroundUrl);
        
        this.state.imgRoot.css("opacity", 0);
        this.imgShowUp();
        $(".bgd-img").addClass("item-fade-out-center");
        this.state.imgRoot.removeClass("item-fade-out-center");
        
        setTimeout(this.onShowDone, 500);
    }

    imgShowUp(){
        var imgTarget = $("#img-item-0");
        $("#img-temp").animate({
            height: imgTarget.outerHeight(),
            width: imgTarget.outerWidth(),
            top: imgTarget.offset().top - $(window).scrollTop(),
            left: imgTarget.offset().left - $(window).scrollLeft()
          }, {
            duration: 500,
            easing: "linear"});
    }

    onShowDone(){
        $(".img-view i").css("display", "inherit");
        $(".btn-close").css("display", "inherit");
        this.checkSlide();
        this.unSwitchImg();
        
    }
    

    closeDetail(){
        $(".overlay").css("opacity", 0);
        $(".description").css("display", "none");
        $(".img-view i").css("display", "none");
        $(".btn-close").css("display", "none");
        
        $(".bgd-img").removeClass("item-fade-out-center");
        this.switchImg();

        $(".img-original").removeClass("img-slide");
        $(".img-original").css("opacity", 0);
        
        this.imgCloseDown();
        $(".bgd-img").addClass("item-fade-in-center");
        this.state.imgRoot.removeClass("item-fade-in-center");
       
        setTimeout(this.closeDone, 500);
    }

    imgCloseDown(){
        var imgTarget =  this.state.imgRoot;
        $("#img-temp").animate({
            height: imgTarget.outerHeight(),
            width: imgTarget.outerWidth(),
            top: imgTarget.offset().top - $(window).scrollTop(),
            left: imgTarget.offset().left - $(window).scrollLeft()
          }, {
            duration: 500,
            easing: "linear"});
    }

    closeDone(){
        $(".preview").css("display", "none");
        $("#img-temp").css("opacity", 0);
        this.state.imgRoot.css("opacity", 1);
        this.props.closeDetail();
    }

    checkSlide(){
        var src = $("#img-item-0").attr("src");
        console.log(this.props.content.listBackgroundUrl.indexOf(src));

        if(this.state.indexBackground == 0) {
            $("#btn-pre").css("display", "none");

        }
        else{
            $("#btn-pre").css("display", "inherit");
        }

        if(this.state.indexBackground == this.props.content.listBackgroundUrl.length - 1) {
            $("#btn-next").css("display", "none");

        }
        else{
            $("#btn-next").css("display", "inherit");
        }
        
    }

    onNextSlide(){
        if(isFirstSlide){
            $(".img-original").addClass("img-slide"); 
            isFirstSlide = false;
        }
        
        this.state.indexBackground ++;
        $(".img-original").css("opacity", 0);
        $("#img-item-" + this.state.indexBackground).css("opacity", 1);
        this.checkSlide();
    }

    onPreSlide(){
        this.state.indexBackground --;
        $(".img-original").css("opacity", 0);
        $("#img-item-" + this.state.indexBackground).css("opacity", 1);
        this.checkSlide();
    }

    render(){
        return(
            <div className="preview">
                <div className="img-view">
                        <i id="btn-pre" className="material-icons" onClick={this.onPreSlide}>chevron_left</i>
                        <i id="btn-next" className="material-icons" onClick={this.onNextSlide}>chevron_right</i>
                        <img id="img-temp" alt=""/>

                    {
                        this.props.content.listBackgroundUrl.map((item,index)=>(
                            <div className="view-item" key={index}>
                                <img  className="img-original" id={`img-item-${index}`} src={item} alt=""/>
                            </div>
                        ))
                    }
                    
                </div>
                <i className="btn-close" onClick={this.closeDetail}><span className="glyphicon glyphicon-remove-circle"></span></i>
                <div className="description">
                    <h3>{this.props.content.projecName}</h3>
                    <p>{this.props.content.projectDescription} <span>— {this.props.content.author}</span></p>
                    <div className="details">
                        <a href={this.props.content.projectLink}>{this.props.content.projectLink}</a>
                    </div>
                    
                </div>
                <div className="overlay"></div>
            </div>
        );
    }
}

export default ItemProjectUpSlide;

/* <ul>
    <li><i className="fa fa-camera"></i><span>Canon PowerShot S95</span></li>
    <li><i className="fa fa-eye"></i><span>22.5mm</span></li>
    <li><i className="fa fa-print"></i><span>ƒ/5.6</span></li>
    <li><i className="fa fa-cog"></i><span>1/1000</span></li>
    <li><i className="fa fa-sun-o"></i><span>80</span></li>
</ul> */