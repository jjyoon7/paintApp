import React, { useState, useEffect, useRef, useCallback } from 'react'
import useWindowSize from './WindowSize'

export default function Canvas() {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.startDrawing = this.startDrawing.bind(this)
    this.stopDrawing = this.stopDrawing.bind(this)
  }

  const [drawing, setDrawing] = useState(false)
  const [windowWidth, windowHeight] = useWindowSize()
  const [width, setWidth] = useState(windowWidth)
  const canvasRef = useRef()

  useEffect(() => {
    this.ctx = this.canvasRef.current.getContext('2d')
    window.addEventListener('resize', this.handleResize);
  }, [])
 
  handleMouseMove(e) {
    // actual coordinates
    const coords = [
      e.clientX - this.canvasRef.current.offsetLeft,
      e.clientY - this.canvasRef.current.offsetTop
    ]
    if (this.state.drawing) { 
      this.ctx.lineTo(...coords)
      this.ctx.stroke()
    }
    if (this.props.handleMouseMove) {
        this.props.handleMouseMove(...coords)
    }
  }
  
  React.memo((startDrawing(e) {
    this.ctx.lineJoin = 'round'
    this.ctx.lineCap = 'round'
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = this.props.color
    this.ctx.beginPath();
    // actual coordinates
    this.ctx.moveTo(
      e.clientX - this.canvasRef.current.offsetLeft,
      e.clientY - this.canvasRef.current.offsetTop
    )
    this.setState({ drawing: true })
  }
  stopDrawing() {
    this.ctx.closePath()
    this.setState({ drawing: false })
  }))
  
    return (
      <React.Fragment>
        <canvas
          ref={canvasRef}
          width={windowWidth}
          height={windowHeight}
          onMouseDown={this.startDrawing}
          onMouseUp={this.stopDrawing}
          onMouseOut={this.stopDrawing}
          onMouseMove={this.handleMouseMove}
        />
      </React.Fragment>
    )
  }
