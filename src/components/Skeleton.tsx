import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  speed={0}
  width={360}
  height={150}
  viewBox="0 0 360 150"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
>
  <rect x="7" y="10" rx="11" ry="11" width="320" height="70" /> 
  <rect x="9" y="96" rx="5" ry="5" width="83" height="22" />
</ContentLoader>
)

export default Skeleton

