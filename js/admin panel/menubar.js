$( document ).ready(function() {
    const template = document.createElement('template');

    template.innerHTML = `<div class="container">
    <h2 class="addMenubarHeader">اضافه کردن منوی جدید</h2>
    <form action="/action_page.php">
      <div class="form-group">
        <label for="nameFa">نام فارسی :</label>
        <input type="text" class="form-control" id="nameFa" placeholder="نام فارسی منوی جدید را وارد کنید" name="nameFa">
      </div>
      <div class="form-group">
        <label for="nameEn">نام انگلیسی:</label>
        <input type="text" class="form-control" id="nameEn" placeholder="نام انگلیسی منوی جدید را وارد کنید" name="nameEn">
      </div>
      <p class="chooseImage">تصویر منو را انتخاب کنید:</p>
      <input type="file" id="myFile" name="filename2">
      <button type="submit" class="btn-submit ">ارسال</button>
    </form>
  </div>`;

    var menuBar = document.getElementById("menubar");
    menuBar.append(template.content);
    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
      });
})    


