import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoMetaData from '../../Components/videoMetaData/videoMetaData'

const WatchScreen = () => {
    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player">
                    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0" title="MY VIDEO" allowFullScreen width="100%" height="100%"> 
                    </iframe>
                </div>
                <VideoMetaData/>
            </Col>
            <Col lg={4}>
            </Col>
        </Row>
    )
}

export default WatchScreen
