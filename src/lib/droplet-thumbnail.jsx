import { Component } from 'react'

import './droplet-thumbnail.styles.css'


class DropletThumbnail extends Component {

    constructor() {
        super()
    }

    render () {
        const {src, alt, className, start} = this.props
        return (
            <div className={`droplet-thumbnail ${className} droplet-thumbnail-sharp-${start}`}>                
                <div className={`droplet-thumbnail-wrapper`}> 
                    <img className={`droplet-thumbnail-image`} src={src} alt={alt}/>
                </div> 
            </div>
        )
    }


}




export default DropletThumbnail