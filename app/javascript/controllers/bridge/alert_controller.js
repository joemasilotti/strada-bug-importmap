import { BridgeComponent } from "@hotwired/strada"

export default class extends BridgeComponent {
  static component = "alert"

  connect() {
    super.connect()
    this.send("connect", {}, () => { })
  }
}
