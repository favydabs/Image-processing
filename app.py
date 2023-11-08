from flask import Flask, flash, render_template, request, redirect
from werkzeug.utils import secure_filename
import cv2
import os


ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'webp', 'gif'}


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['SECRET_KEY'] = os.urandom(24)


def allowed_files(filename):
    return '.' in filename and \
            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def processImage(filename, operation):
    image = cv2.imread(f"uploads/{filename}")
    # match operation:  # Further research on how this works needed
    # with Switch(operation) as s: # Further research needed too
    # Operations for each conversions
    if operation == "jpg":
        newFilename = f"static/img/{filename.split('.')[0] + '.jpg'}"
        cv2.imwrite(newFilename, image)
        return newFilename
    if operation == "png":
        newFilename = f"static/img/{filename.split('.')[0] + '.png'}"
        cv2.imwrite(newFilename, image)
        return newFilename
    if operation == "webp":
        newFilename = f"static/img/{filename.split('.')[0] + '.webp'}"
        cv2.imwrite(newFilename, image)
        return newFilename


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/convert/', methods=['GET', 'POST'])
def convert():
    if request.method == 'POST':
        # Upload file to the server
        # check if the post request has a file part
        if 'file' not in request.files:
            flash('No files chosen')
            return redirect(request.url)
        file = request.files['file']
        operation = request.form.get('operation')
        # if the user does not select a file, the browser submits
        # an empty file without a filename
        if file.filename == '':
            flash('No files selected')
            return redirect(request.url)
        if file and allowed_files(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            newFilename = processImage(filename, operation)
            # return f"Your file is available <a href='/{newFilename}'>here. </a>"
            flash(f"Your file is available <a href='/{newFilename}'>here. </a>")


    return render_template('convert.html')


if __name__ == '__main__':
    app.run(debug=True)
