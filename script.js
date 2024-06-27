class Cube {
    height = "";
    width = "";
    length = "";

    set_height() {
        this.height = 5 + "cm"
    }
    get_height() {
        document.write("height:" + this.height + "<br>")
    }

    set_width() {
        this.width = 5 + "cm"
    }
    get_width() {
        document.write("width:" + this.width + "<br>")
    }

    set_length() {
        this.length = 5 + "cm"
    }
    get_lenght() {
        document.write("length:" + this.length)
    }
}

var object = new Cube;

object.set_height()
object.get_height()

object.set_width()
object.get_width()

object.set_length()
object.get_lenght()