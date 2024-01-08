import styled from 'styled-components'

const ThumbsWrapper = styled.div`
  display: flex;
  margin-top: 14px;
  gap: 20px;
  flex-wrap: wrap;
`

const Dropzone = styled.div`
  width: 200px;
  height: 150px;
  border: 2px dashed black;
  background-color: rgb(235, 237, 238);
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Thumb = styled.div`
  width: 200px;
  height: 150px;
  background-size: cover;
  background-position: center center;
  cursor: pointer;

  &:hover .mask {
    display: block;
  }
`

const Mask = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: relative;

  & .trashIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const MainImageText = styled.span`
  background-color: blue;
  position: absolute;
  padding: 2px 6px;
  bottom: 0;
`

export {ThumbsWrapper, Dropzone, Thumb, Mask, MainImageText}