import React, { Component } from 'react'

// MIMIC useEffect with Render Props and class component
class Posts extends Component {
  state = { posts: null }
  subscribeToPosts() {
    // Fake posts creation
    this.setState({
      posts: [
        {message: "test"}
      ]
    })
  }
  subscribe() {
    this.unsub = this.subscribeToPosts(this.props.uid, posts => {
      this.setState({ posts })
    })
  }
  componentDidMount() {
    this.subscribe();
  }
  componentDidUpdate(prevProps) {
    if(prevProps.uid !== this.props.uid) {
      this.unsub()
      this.subscribe()
    }
  }
  componentWillUnmount() {
    this.unsub();
  }
  render() {
    return this.props.children(this.state.posts);
  }
}

export class UseEffectRenderProps extends Component {
  render() {
    return (
      <Posts uid={12}>
        {
          posts => (
            JSON.stringify(posts)
          )
        }
      </Posts>
    )
  }
}

export default UseEffectRenderProps
