function fun71(Arr1:number[]):number
{
    if(Arr1==null)
    {
        console.log("There is No Elements in Array");
        return -1;
    }

    for(var i=0;i<Arr1.length;i++)
    {
        for(var j=0;j<=i;j++)
        {
            console.log(Arr1[j]);

        }
    console.log();
    }

}

function fun72(Arr1:number[]):number
{
    if(Arr1==null)
    {
        console.log("There is No Elements in Array");
        return -1;
    }
    for(var i=Arr1.length;i>=0;i--)
    {
        for(var j=0;j<=i;j++)
        {
            console.log(Arr1[j]);

        }
    console.log();
    }

}

function fun73(Arr1:number[]):number
{
  if(Arr1==null)
    {
        console.log("There is No Elements in Array");
        return -1;
    }

        for(var i=0;i<Arr1.length;i++)
    {
        for(var j=0;j<Arr1.length;j++)
        {
            if((i==0)||(j==0)||(i==Arr1.length-1)||(j==Arr1.length-1))
            {
                console.log(Arr1[j]);

            }
            else
            {
                console.log(0);
            }

        }
    console.log();
    }

}


function fun74(Arr1:number[]):number
{
    if(Arr1==null)
    {
        console.log("There is No Elements in Array");
        return -1;
    }
  for(var i=0;i<Arr1.length;i++)
    {
        for(var j=0;j<Arr1.length;j++)
        {
            if(i>j)
            {
                console.log(0);

            }
            else
            {
                console.log(Arr1[j]);
            }

        }
    console.log();
    }

}

function fun75(Arr1:number[]) :Number
{
    if(Arr1==null)
    {
        console.log("There is No Elements in Array");
        return -1;
    }
  for(var i=0;i<Arr1.length;i++)
    {
        for(var j=0;j<Arr1.length;j++)
        {
            if((j==1)||(j==3))
            {
                console.log(0);

            }
            else
            {
                console.log(Arr1[j]);
            }

        }
    console.log();
    }

}


function fun76(Arr1:number[])  :number
{
    if(Arr1==null)
    {
        console.log("There is No Elements in Array");
        return -1;
    }
  for(var i=0;i<Arr1.length;i++)
    {
        for(var j=0;j<Arr1.length;j++)
        {
        
            console.log(Arr1[i]);

        }
    console.log();
    }

}

function fun77(Arr3)    :number
{
    if(Arr3==null)
    {
        console.log("There is No Elements in Array");
        return -1;
    }

     var Rev:number=0;
    var Digit=0;
    for(var i=0;i<Arr3.length;i++)
    {
            while(Arr3[i]!=0)
            {

                    Digit=Arr3[i]%10;
                    Rev=Rev*10+Digit;
                    Arr3[i]=Math.floor(Arr3[i]/10);
            }
        Arr3[i]=Rev;
        Rev=0;
    }

    for(i=0;i<Arr3.length;i++)
    {
        for(var j=0;j<Arr3.length;j++)
        {
            console.log(Arr3[j]);
        }
        console.log();
    }

}

/*
function fun78(Arr3)
{
    var i=0,j=0;
    var Rev=0;
    var Digit=0;
   var Arr5=Arr3;
    for(i=0;i<Arr4.length;i++)
    {
            while(Arr4[i]!=0)
                  {

                    Digit=Arr5[i]%10;
                    Rev=Rev*10+Digit;
                    Arr5[i]=Math.floor(Arr5[i]/10);
                
                }
                     Arr5[i]=Rev;
                     Rev=0;
                
    }

    console.log(Arr5[0]);

        for(i=0;i<Arr3.length;i++)
        {
                if((i==1)||(i==3))
                {
//                  for()
                }
                else
                {
                    for(j=0;j<Arr3.length;j++)
                    {
                        console.log(Arr3[j]);
                    }

                }
                console.log();

        }
}
*/    

function fun79(Arr5:number[]) :number
{
    if(Arr5==null)
    {
        console.log("There is No Elements in Array");
        return -1;
    }
    
    var sum=0;
    var i=0,j=0;
    var Digit=0;
   
        for(j=0;j<Arr5.length;j++)
        {
            while(Arr5[j]!=0)
            {
                    Digit=Arr5[j]%10;
                    sum+=Digit;
                    Arr5[j]=Math.floor(Arr5[j]/10);

           }
            Arr5[j]=sum;
            sum=0;
         }

            for(i=0;i<Arr5.length;i++)
            {
                 for(j=0;j<Arr5.length;j++)
                {
                    console.log(Arr5[j]);
                }
                console.log();
         }
}
  

function fun80(Arr5:number[]):number 
{
    if(Arr5==null)
    {
        console.log("There is No elements in Array");
        return -1;
    }
     var sum=0;
    var i=0,j=0;
    var Digit=0;
   
        for(j=0;j<Arr5.length;j++)
        {
            while(Arr5[j]!=0)
            {
                    Digit=Arr5[j]%10;
                    sum+=Digit;
                    Arr5[j]=Math.floor(Arr5[j]/10);

           }
            Arr5[j]=sum;
            sum=0;
         }

            for(i=0;i<Arr5.length;i++)
            {
                 for(j=0;j<Arr5.length;j++)
                {
                    if((i==0)||(j==0)||(i==Arr5.length-1)||(j==Arr5.length-1))
                    {
                        console.log(Arr5[j]);

                    }
                    else
                    {
                        console.log("00");
                    }
                
                }
                console.log();
         }
}
var nn=10;
function fun81(num1)
{
    console.log("Inside the fun")
    var i=3;
    console.log(i);
    if(i>3)
    {
    fun81(3);
    i--;
    }
}


console.log("Pattern13:-")
var Arr1:number[]=[89,67,45,11,78];
fun71(Arr1);


console.log("Pattern14:-")
var Arr1:number[]=[89,67,45,11,78];
fun72(Arr1);

console.log("Pattern15:-");
var Arr1:number[]=[89,67,45,11,78];
fun73(Arr1);

console.log("Pattern16:-");
var Arr2:number[]=[89,67,45,11,78];
fun74(Arr2);

console.log("Pattern17:-");
var Arr2:number[]=[89,67,45,11,78];
fun75(Arr2);

console.log("Pattern18:-");
var Arr2:number[]=[89,67,45,11,78];
fun76(Arr2);

console.log("pattern19:-")
var Arr3:Number[]=[89,67,45,11,78,13];
fun77(Arr3);
/*
console.log("pattern20:-")
var Arr4:Number[]=[89,67,45,11];
fun78(Arr4);
*/

console.log("Pattern21:-");
var Arr5:number[]=[89,67,45,11];
fun79(Arr5);

console.log("Pattern22:-");
var Arr5:number[]=[89,67,45,11];
fun80(Arr5);

console.log("Some Generic Programming Examples");
fun81(5);
