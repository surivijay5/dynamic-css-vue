const vm = Vue.createApp({
    data(){
        return{
            perspective: 150,
            rotateXValue:0,
            rotateYValue:0,
            rotateZValue:0
        }
    },
    computed:{
        applyAllClasses(){
            const width = `${this.perspective}px`
            const rotateX = `rotateX(${this.rotateXValue}deg)`
            const rotateY = `rotateY(${this.rotateYValue}deg)`
            const rotateZ = `rotateX(${this.rotateZValue}deg)`
            const transform = `${rotateX}${rotateY}${rotateZ}`
            return {width, height: width, transform }
        }
    },
    methods:{
        reset(){
           this. perspective =  150,
            this.rotateXValue = 0,
            this.rotateYValue = 0,
            this.rotateZValue = 0
        },
        copy(){
            const el = document.createElement('textarea')
            el.value = `transform : ${this.applyAllClasses.transform}`
            el.setAttribute('readonly', '');                
            el.style.position = 'absolute';                     
            el.style.left = '-9999px';  
            document.body.appendChild(el)
            el.select();                                    
            document.execCommand('copy');                   
            document.body.removeChild(el); 
        }
    }
}).mount('#app')