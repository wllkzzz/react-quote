import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
<ContentLoader viewBox="0 0 300 50" {...props}>
    <rect x="0" y="0" rx="3" ry="3" />
  </ContentLoader>
)

export default MyLoader

