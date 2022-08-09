import { Component } from 'react'
import './droplet-thumbnail.styles.css'


class DropletThumbnail extends Component {
    constructor () {
        super();
        this.state = {
            isHovered: false,
            isLoaded: false,
       }
    }

    render () {
        const {src, alt, className, start, maxwidth,  rotationangle, padding, color, keepimagesize, transitioninsteadrotation, transitionspeed, imagerotation, imagescale} = this.props
        const {isHovered, isLoaded} = this.state
        const dropletStyle= {
            maxWidth: `${maxwidth}`,
            maxHeight: `${maxwidth}`,    
            padding: `${padding}`,
        }


        const dropletRotationSpeed = transitioninsteadrotation? transitionspeed : transitionspeed * Math.abs(rotationangle) / 90
        const dropletRotationStyle = {
            transform: isHovered && !transitioninsteadrotation ? `rotate(${rotationangle}deg)` : 'rotate(0deg)',
            transition: `all ${dropletRotationSpeed}s ease`,
            backgroundColor: `${color}`
        }

        const dropletImageRotationStyle = {
            transform: isHovered ? `scale(${imagescale}) rotate(${imagerotation})` : '',
            transition: `all ${dropletRotationSpeed}s ease`,
            opacity: isLoaded ? '1' : '0',
        }

        const dropletImageCoverStyle = {
                clipPath: "circle(50.0% at 50% 50%)"
        }

        const moves = [
            'top-left',
            'top-right',
            'bottom-right',
            'bottom-left',
        ]
        const moveto = (((moves.indexOf(start) + rotationangle / 90)+4) % 4)
        const end = moves[moveto]

        return (
            <div 
                style={dropletStyle}
                className={`droplet-thumbnail ${className} ${isHovered ? 'dt-hover' : '' }`}
                onMouseEnter={()=> this.setState(()=> { return {isHovered: true}})}
                onMouseLeave={()=> this.setState(()=> { return {isHovered: false}})}                    
            >
                <div 
                    className={`droplet-thumbnail-droplet droplet-thumbnail-droplet-sharp-${isHovered && transitioninsteadrotation? end : start}`}
                    style={dropletRotationStyle}
                ></div>
                <div
                    style={keepimagesize? dropletImageCoverStyle : null} 
                    className={`droplet-thumbnail-content`}> 
                    <img
                        style={dropletImageRotationStyle} 
                        className={`droplet-thumbnail-image`} 
                        src={src}
                        onLoad={()=> this.setState({isLoaded: true})}
                        alt={alt}/>
                </div> 
            </div>
        )
    }
}

DropletThumbnail.defaultProps = {
    maxwidth: "100%",
    padding: "16px",
    color: "#555",
    keepimagesize: false,
    transitioninsteadrotation: true,
    start: "top-left",
    rotationangle: "-90",
    alt: "",
    src: "#",
    transitionspeed: 0.2,
    imagerotation: "5deg",
    imagescale: 1.05,
}

export default DropletThumbnail