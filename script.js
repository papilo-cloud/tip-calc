var txt1 = document.getElementById('txt1')
		var Msg = document.getElementById('errMsg')
		var Reset = document.getElementById('reset')
		var Amt = document.getElementById('amount')
		var Prs = document.getElementById('total')
		//Adding style to the input elements...
			txt1.addEventListener('input',function(){
				if (this.value == 0) {
					this.className = 'txt1'	
					Msg.innerHTML = "cant't be zero"
					Msg.style.color = 'red'
				}else{
					this.className = 'me'
					Msg.innerHTML = ''
				}
			})

		Reset.addEventListener('click',()=>{
			Amt.innerHTML = '00'
			Prs.innerHTML = '00'
		})

		function myBtn(e) {
			//Decleare all the input variabls..
			var txt = document.getElementById('txt')
			// var Amt = document.getElementById('amount')
			// var Prs = document.getElementById('total')

			// Perform some little calculations..
			var val1 = txt1.value;
			var pcnt = e/100
			var val = txt.value * pcnt
			var ans = val / val1
			var ans1 = txt.value / ans

			Amt.innerHTML = ans.toFixed(2);
			Prs.innerHTML = ans1.toFixed(2)
		}
		// function btn() {
		// 	alert('Hello world')
		// }



