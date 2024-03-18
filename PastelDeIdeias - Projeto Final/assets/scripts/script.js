const MyNameApp = {
    data() {
      return {
        inputTitle:"",
        inputFlavor:"",
        inputPrice:"",
        inputDescription: "",
        order_title: "",
        order_price: "",
        orderImage:"",
        orderflavor_Textarea: "",
        orderDesc_Textarea: "",
        order:"",
        orders: []

      }
    },
    methods: {
    clearForm(e) {  
      var inputTitle = document.getElementById("inputTitle")
      var inputFlavor = document.getElementById("inputFlavor")
      var inputPrice = document.getElementById("inputPrice")
      var inputDescription = document.getElementById("inputDescription")
      var inputOrder = document.getElementById("inputOrder")
      var foodCheckBox = document.getElementById("checkBox")
      var labelImagePreviw = document.getElementById("notImagePreview_label")
      var imagePreview = document.getElementById("imagePreview")
      
      inputTitle.value ="";
      inputPrice.value ="";
      inputFlavor.value ="";
      inputDescription.value ="";
      inputOrder.value="";
      foodCheckBox.checked = false;
      labelImagePreviw.style.display="flex";
      imagePreview.style.display="none";
      
    },
    convertImage(e){
      var labelImage = document.getElementById('notImagePreview_label')
      var imagePreview = document.getElementById('imagePreview')
      var li = document.getElementsByClassName('orderListItem ')
      var length = li.length

      imagePreview.style.display="flex"
      labelImage.style.display="none"
      
      //FAZ A CONVERSÃO DA IMAGEM
      var loadImage = inputOrder.files[0];
      var readImage = new FileReader();

        readImage.onload = function(loadedImage){
          console.log("chamou convert")
           
          var imageBase64 = loadedImage.target.result;
            imagePreview.src=imageBase64;
        }
        readImage.readAsDataURL(loadImage);


// Adiciona um ID = 0 ao primeiro item da tabela
        if(length == 0 ){

        var newOrder = {id: length, title: inputTitle.value, price: inputPrice.value , flavor: inputFlavor.value , description: inputDescription.value}
        this.orders.push(newOrder)

        } 

//Adiciona um ID= length ao ultimo item criado, de modo que todo novo item possua ID=0 e a lista opere de forma crescente,
        if (length == 1  ){
        
        var newOrder = {id: length, title: inputTitle.value, price: inputPrice.value , flavor: inputFlavor.value , description: inputDescription.value}
        this.orders.push(newOrder)
        li[length-1].id = length

        var liSelect = document.getElementById(length)
        var divConteudoSelect = liSelect.children
        var divConteudo = divConteudoSelect.liContent
        var imgSelect = divConteudo.children
        var img = imgSelect.orderImage

        img.src = imagePreview.src

      } 

      if (length>=2) {
        var newOrder = {id: length, title: inputTitle.value, price: inputPrice.value , flavor: inputFlavor.value , description: inputDescription.value}
        this.orders.push(newOrder)
      
        li[0].id=length
       
        var liSelect = document.getElementById(length)
        var divConteudoSelect = liSelect.children
        var divConteudo = divConteudoSelect.liContent
        var imgSelect = divConteudo.children
        var img = imgSelect.orderImage
        img.src = imagePreview.src
      }
    },
    submitForm(e){
      var imagePreview = document.getElementById('imagePreview')  ;
      var ul = document.getElementById('orderList');
      var li = document.getElementsByClassName('orderListItem');
      let length = li.length;
      var li_id = document.getElementById(0);
      var liSelect = document.getElementById(0);
      var divConteudoSelect = liSelect.children;
      var divConteudo = divConteudoSelect.liContent;
      var imgSelect = divConteudo.children;
      var img = imgSelect.orderImage;

      img.src = imagePreview.src;
      li[length-1].style.display="block";
      ul.insertBefore(li_id, li[0]);

      this.clearForm()
    }
  }
}
  
  Vue.createApp(MyNameApp).mount('#app')