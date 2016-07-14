import {ContainerPlugin, Events} from 'clappr'

export default class <PLUGIN-MODULE-NAME> extends <PLUGIN-TYPE> {
  constructor(container) {
    super(container);
  }

  bindEvents() {
    this.listenTo(this.container, Events.CONTAINER_PLAY, this.onPlay)
  }

  onPlay() {console.log('playing')}
}
