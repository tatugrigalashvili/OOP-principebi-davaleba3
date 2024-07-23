class Cube {
    height = "";
    width = "";
    length = "";

    set_height() {
        this.height = 5 + "cm"
    }
    get_height() {
        return this.height
    }

    set_width() {
        this.width = 5 + "cm"
    }
    get_width() {
       return this.width
    }

    set_length() {
        this.length = 5 + "cm"
    }
    get_lenght() {
        return this.length
    }
}

var object = new Cube;

object.set_height();
object.set_width();
object.set_length();


document.write("Height: " + object.get_height() + "<br>");
document.write("Width: " + object.get_width() + "<br>");
document.write("Length: " + object.get_lenght());