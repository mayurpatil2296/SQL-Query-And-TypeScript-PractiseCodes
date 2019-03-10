

console.log("Assignment-2");

function fun1(num1)
{
    for(var i=1;i<=num1;i++)
    {
        if(i%2==0)
        {
                console.log(i);

        }

    }


}
function fun2(num2)
{
    if(num2<0)
    {
        num2=-num2;

    }
    for(var i=1;i<=num2*2;i++)
    {

            if(i%2==0)
            {
                    console.log(i);

            }

    }

}

function fun3(num1:number,num2:number)
{

    var temp=0;
    console.log("Before-Swapping Number");
    console.log("num1"+num1);
    console.log("num2"+num2);
    temp=num2;
    num1=num2;
    num2=temp;
    console.log("After-Swapping");
    console.log("num1",num1);
    console.log("num2",num2);
}

function fun4(char1,char2)
{
    var temp:string;
    console.log("Before Swapping Character:-");
    console.log("char1",char1);
    console.log("char2"+char2);
    temp=char1;
    char1=char2;
    char2=temp;
    console.log("After Swapping Character:-");
    console.log("char1",char1);
    console.log("char2"+char2);
    

}

function fun5(char1)
{
    console.log("Before Converting Character:-"+char1);
    char1=char1+32;
    console.log("After Converting Character:-"+char1);


}

function fun6(char1)
{

    if((char1=='a')||(char1=='e')||(char1=='i')||(char1=='o')||(char1=='u')
    ||(char1=='A')||(char1=='E')||(char1=='I')||(char1=='O')||(char1=='U'))
    {

        console.log("The Character is Vowel");

    }
    else
    {
        console.log("The Character is Not-Vowel");

    }

}


function fun7(num1:number,num2:number)
{ 
    console.log("Before Swapping Number");
    console.log("Num1:-",num1);
    console.log("Num2:-",num2);

    num2=num1+num2;
    num1=num2-num1;
    num2=num2-num1;

    console.log("After Swapping Number");
    console.log("Num1:-",num1);
    console.log("Num2:-",num2);
    
}

function fun8(num1)
{

    var fact=1;
    for(var i=1;i<=5;i++)
    {
        fact=fact*i;
        
    }

    console.log("factorial:-"+fact);

}

function fun9(num1,num2,num3)
{
    var ans=0;
    ans=num1+num2+num3;
    var avg=ans/3;
    return avg;

}


function fun11(num1,num2)
{
        var i:number=num1;

        for(i;i<=num2;i++)
        {
            console.log(i);

        }


}


function fun12(num1,num2)
{
       // var i:number=num1;

        for(var i=num1;i<=num2;i++)
        {
            if(i%2==0)
            {
                console.log(i);
            }        
        }   


}

function fun13(num1,num2)
{
    var sum:number=0;
    for(var i=num1;i<=num2;i++)
    {

        sum=sum+i;

    }

    return sum;

}


function fun14(num1,num2)
{
    var sum:number=0;
    for(var i=num2;i>=num1;i--)
    {

        console.log(i);

    }

}

function fun15(num1:number)
{
    var sum:number=0;
   var digit:number=0;
    
   if(num1<0)
    {
        num1=-num1;

    }

    while(num1!=0)
    {
            digit=num1%10;
            sum+=digit;
            num1=Math.floor(num1/10);
    }

    return sum;
}
 
function fun16(num1:number)
{
    var digit:number;
    if(num1<0)
    {
        num1=-num1;

    }

    while(num1!=0)
    {
            digit=num1%2;
            console.log(digit);
            num1=Math.floor(num1/2);
    }

}

function fun17(num1:number)
{
    var multi:number=1;
   var digit:number=0;
    
   if(num1<0)
    {
        num1=-num1;

    }

    while(num1!=0)
    {
            digit=num1%10;
            multi*=digit;
            num1=Math.floor(num1/10);
    }

    return multi;
}

function fun18(num1:number)
{
    var sum:number=0;
    var digit=0;
    if(num1<0)
    {
        num1=-num1;
    }

    while(num1!=0)
    {

            digit=num1%10;
            if(digit%2==0)
            {

                    sum+=digit;
            }

            num1=Math.floor(num1/10);
    }
    console.log("Even Number Sum:-",sum);

}

function fun19(num1:number)
{
    var count:number=0;
    var digit=0;
    if(num1<0)
    {
        num1=-num1;
    }

    while(num1!=0)
    {

            digit=num1%10;
            if(digit==5)
            {
                    count++;
            }

            num1=Math.floor(num1/10);
    }
    return count;
}


function fun20(num1:number)
{
    var count:number=0;
    var digit=0;
    if(num1<0)
    {
        num1=-num1;
    }

    while(num1!=0)
    {

            digit=num1%10;
            if(digit==0)
            {
                    count++;
            }

            num1=Math.floor(num1/10);
    }
    return count;
}

function fun21(num1:number)
{
    var count:number=0;
    var digit=0;
    if(num1<0)
    {
        num1=-num1;
    }

    while(num1!=0)
    {

            digit=num1%10;
            if(digit>5)
            {
                    count++;
            }

            num1=Math.floor(num1/10);
    }
    return count;
}

function fun22(num1:number)
{
    var sumodd:number=0;
    var digit=0;
    if(num1<0)
    {
        num1=-num1;
    }

    while(num1!=0)
    {

            digit=num1%10;
            if(digit%2==1)
            {
                sumodd+=digit;        
            }

            num1=Math.floor(num1/10);
    }
    return sumodd;
}


function fun23(num1:number)
{
    var sumodd:number=0;
    var sumeven:number=0;
    var sumdiff:Number=0;
    var digit=0;
    if(num1<0)
    {
        num1=-num1;
    }

    while(num1!=0)
    {

            digit=num1%10;
            if(digit%2==1)
            {
                sumodd+=digit;        
            }
            else
            {
                sumeven+=digit;

            }

            num1=Math.floor(num1/10);
    }
    return sumeven-sumodd;
}



function fun24(num1:number)
{
    var min:number=num1%10;
  
    var digit=0;
    if(num1<0)
    {
        num1=-num1;
    }

    while(num1!=0)
    {

            digit=num1%10;
            if(digit<min)
            {
                    min=digit;

            }
            num1=Math.floor(num1/10);
    }
    return min;
}


function fun25(num1:number)
{
    var max:number=num1%10;
  
    var digit=0;
    if(num1<0)
    {
        num1=-num1;
    }

    while(num1!=0)
    {

            digit=num1%10;
            if(digit>max)
            {
                    max=digit;

            }
            num1=Math.floor(num1/10);
    }
    return max;
}


function fun26(num1:number)
{
    for(var i=1;i<=num1;i++)
    {
        console.log("$");

    }
    console.log("\n");
    for(var i=1;i<=num1;i++)
    {
        console.log("#");

    }

}


function fun27(num1:number)
{
    for(var i=1;i<=num1;i++)
    {
        console.log("# $");

    }
    
}


function fun28(length:number,width:number)
{
    var square:number=0;
    square=length*width;
    return square;
}


function fun29(Radius:number)
{
    var PI:number=3.14;
    var Circum:Number=0;
    Circum=2*PI*Radius;
  return Circum;
}

function fun30(Distance:number)
{

    return Distance/100;

}

function fun31(Side:number)
{

    return Side*Side;

}


function fun32(Kilometer:number)
{
    if(Kilometer>120)
    {
    var $KM=120;
    var Diff=0;
    var Ans=0;
    Diff=Kilometer-$KM;
    Ans=(Diff*10)+(120*15);
    console.log(Ans);
    }
    else
    {

        console.log(Kilometer*15);

    }

}

function fun33(num1:Number,Char:String)
{

    for(var i=1;i<=num1;i++)
    {
            console.log(Char);

    }

}

function fun34(num1:number)
{

        var Digit=0;
        var Sum=0;
        var Fact=1;
        while(num1!=0)
        {
                Digit=num1%10;
                var i=Digit;
                while(i>=1)
                {
                        Fact*=i;
                        i--;
                        
                }
                Sum=Sum+Fact;
                Fact=1;
                num1=Math.floor(num1/10);
         }
return Sum;
}


function fun35(num1:number)
{
    if(num1<0)
    {

        num1=-num1;
    }
    var digit=0;
    var i=0;
    var fact:number=1;
    var temp:number=num1;
    num1=temp;
    var sum:number=0;
    while(num1!=0)
    {
        digit=num1%10;
        i=digit;
                while(i>=1)
            {
                fact=fact*i;        
                i--;
            }
                sum=sum+fact;
                fact=1;
        num1=Math.floor(num1/10);
    }

    if(sum==temp)
    {
            console.log("Given Number Is Strong");

    }

    else
    {
            console.log("Given Number is Not Strong");

    }
}


function fun36(num1,num2)
{
    var fact:number=1;
    for(var i=1;i<=num2;i++)
    {
            fact=fact*num1;

    }
    
    return fact;
}


function fun37(num1:number)
{
    var count=0;
    var num2=num1;
    var digit=0;
    var ret=0;
    var sum:number=0;
    var num3:number=num1;
    while(num1!=0)
    {
        count++;
        num1=Math.floor(num1/10);

    }

        while(num2!=0)
        {
            digit=num2%10;
            ret=fun36(digit,count);
            sum=sum+ret;
            num2=Math.floor(num2/10);
        }

        if(sum==num3)
        {
            console.log("Given Number Is Armstrong");

        }
        else
        {
            console.log("Given Number Is Not Armstrong");

        }

}

function fun38(num1:number)
{
    while(num1>=1)
    {
        console.log(num1);
        for(var i=1;i<=num1;i++)
        {
            console.log("$");

        }
            num1--;
    }

}

function fun39(char:string)
{

        switch(char)
        {
               case 'A':
               console.log("Its Capital");
               break;

               case 'a':
               console.log("Its Small");
               break;

                case '2':
                console.log("Its Digit");
                break;

                default:
                console.log("Wrong Choice");
        }
}

function fun40(num1:number)
{
    var sum1:number=0;
    var sum2:number=0;
    var digit1:number=0;
    var digit2=0;
    if(num1<0)
    {
        num1=-num1;

    }
    while(num1!=0)
    {
            digit1=num1%10;
            sum1=sum1+digit1;
            num1=Math.floor(num1/10);
    }
    while(sum1!=0)
    {
            digit2=sum1%10;
            sum2=sum2+digit2;
            sum1=Math.floor(sum1/10);
    
    }
    return sum2;

}

function fun41(Principle,Time,Rate)
{
  
    var Ans:number=0;
    Ans=Principle*Time*Rate;
    
     return Ans/100;
}

function fun42(Arr:number[])
{
    var i=0;
    if(Arr==null)
    {
        return -1;

    }
    for(i=0;i<Arr.length;i++)
    {
        if(Arr[i]%2==0)
        {
            console.log(Arr[i]);

        }

    }

}

function fun43(Arr:number[])
{
    var i=0;
    
    if(Arr==null)
    {
        return -1;

    }
    for(i=Arr.length;i>=0;i--)
    {
        console.log(Arr[i])
    }

}

function fun44(Arr:number[])
{
    var i=0;
    var sum:number=0;

    if(Arr==null)
    {
        return -1;

    }
    for(i=0;i<Arr.length;i++)
    {
        if(Arr[i]%2==0)
        {
            sum=sum+Arr[i];

        }

    }
return sum;
}


function fun45(Arr)
{
    var i=0;
   if(Arr==null)
    {
        return -1;

    }
    for(i=0;i<Arr.length;i++)
    {
        if(Arr[i]>8.9)
        {
                console.log(Arr[i]);
        }

    }
}

function fun46(Arr:number[])
{
    var i=0;
    var Temp=0;
    var Count=0;
    
    if(Arr==null)
    {
        return -1;

    }
    for(i=0;i<Arr.length;i++)
    {
        Temp=Arr[i]
        while(Arr[i]!=0)
        {
                
                Count++;
                Arr[i]=Math.floor(Arr[i]/10);

        }
        console.log("Occurances:-",Temp,":-"+Count);
        Count=0;
    }

}


function fun47(Arr:number[])
{
    var i=0;
    var Temp=0;
    var Sum=0;
    var Digit;
    if(Arr==null)
    {
        return -1;

    }
    for(i=0;i<Arr.length;i++)
    {
        Temp=Arr[i]
        while(Arr[i]!=0)
        {
                Digit=Arr[i]%10;
                Sum=Sum+Digit;
                Arr[i]=Math.floor(Arr[i]/10);

        }
        console.log("Occurances:-",Temp,":-"+Sum);
        Sum=0;
    }

}

function fun48(Arr:Number[])
{
    var Max=Arr[0];
    var i:number=0;
    
    if(Arr==null)
    {
        return -1;

    }
    for(i=0;i<Arr.length;i++)
    {
        if(Arr[i]>Max)
        {
            Max=Arr[i];

        }

    }

    return Max;
}


function fun49(Arr:Number[])
{
    var Min=Arr[0];
    var i:number=0;

    
    if(Arr==null)
    {
        return -1;

    }
    for(i=0;i<Arr.length;i++)
    {
        if(Arr[i]<Min)
        {
            Min=Arr[i];

        }

    }

    return Min;

}
/*
function fun50(Arr:number[])
{
    var i:number=0;
    var flag:number=0;
    for(i=0;i<Arr.length;i++)
    {
        if(Arr[i]%2==0)
        {
            flag=0;

        }
        if(flag==0)
        {
            console.log("");

        }
        else
        {                                                                                               
            console.log(Arr[i]);

        }
        

    }

}
*/

function fun51(Arr:number[])
{
    var i:number=0;
    console.log("Before Replacing Elements:-");
    for(i=0;i<Arr.length;i++)
    {
        console.log(Arr[i])
    }
    
    for(i=0;i<Arr.length;i++)
    {
  
        if(Arr[i]%3==0)
        {
            Arr[i]=Arr[i]+1;
        }
    
        else if((Arr[i]%3==0)&&(Arr[i]%5==0))
         {
            Arr[i]=Arr[i]+2;
        }
        else
        {
                console.log(Arr[i]);
        }

    }

    console.log("After Replacing Elements");
    for(i=0;i<Arr.length;i++)
    {
        console.log(Arr[i]);
    }
}

function fun52(Arr:number[])
{
    var i:number=0;
    console.log("Before Replacing Elements:-");
    for(i=0;i<Arr.length;i++)
    {
        console.log(Arr[i]);

    }
    for(i=0;i<Arr.length;i++)
    {
  
        if(Arr[i]%2==0)
        {
            Arr[i]=1;
        }
    
        else if(Arr[i]%2==1)
         {
            Arr[i]=0;
        }
        else
        {
                console.log(Arr[i]);
        }

    }
    console.log("After Replacing Elements");
    for(i=0;i<Arr.length;i++)
    {
        console.log(Arr[i])

    }
}

function fun53(Arr:number[],Value:number)
{
        for(var i=0;i<Arr.length;i++)
        {
                if(Arr[i]%Value==0)
                {
                    console.log(Arr[i]);
                }
        }

}

function fun54(Arr1:Number[],Arr2:number[])
{
        if(Arr1.length!=Arr2.length)
        {
            console.log("Size Of Both Array Are Different");

        }
        for(var i=0;i<Arr1.length;i++)
        {           
                        if(Arr1[i]!=Arr2[i])
                    {       

                            break;

                    }   

        }

            if(i>=Arr1.length)
            {
                    console.log("Both Array Are Same");

            }
            else
            {

                    console.log("Both Array Are Not Same");
            }


}

function fun55(Arr1:number[],Arr2:number[])
{

    var sum1Arr=0;
    var sum2Arr=0;
        for(var i=0;i<Arr1.length;i++)
        {           
            sum1Arr=sum1Arr+Arr1[i];
        }
        
        for(var i=0;i<Arr2.length;i++)
        {           
            sum2Arr=sum2Arr+Arr2[i];
        }

        return sum1Arr-sum2Arr;
}

function fun56(Arr1:number[])
    {
        var i:number=0;
        for(i=0;i<Arr1.length;i++)
        {

                if(Arr[i]>Arr[i]+1)
                {
                    break;
                }
        }
        if(i>=Arr1.length)
        {
            console.log("Array Is in Sorted-Form");
        }
        else
        {
            console.log("Array Is Not in Sorted-Form");

        }
}

console.log("Display Even-Number:-");
fun1(10);

console.log("Display Even-Number:-");
fun2(7);

console.log("Number-Swapping Using Temparary Variable");
fun3(11,12);

console.log("Character-Swapping Using Temparary Variable");
fun4('A','B');


console.log("Accept one Character and Convert Case of that Character");
fun5('a');

console.log("Check the Given Character Is Vowel or Not");
fun6('a');

console.log("Number-Swapping Without Using Temparary variable");
fun7(100,200);

console.log("Factorial of Particular Number");
fun8(5);

console.log("Accept Three Number From user Display the average of Three Number");
var ret=fun9(12,22,34);
console.log(ret);

//console.log("Accept one Number Display that Binary Number");
//fun10(5);

console.log("Accept Range From User And Display the All element Between That Range");
fun11(11,25);

console.log("Accept Range From User And Display the All Even element Between That Range");
fun12(11,25);

console.log("Accept Range From User And Display the All element Addition Between That Range");
var ret=fun13(11,25);
console.log("Sum Of Element:-",ret);

console.log("Accept Range From User and Display All Element into reverse Order Between That range");
fun14(11,25);

console.log("Accept one Number From User Calculate Sum of that number");
var ret:number=fun15(712);
console.log("Sum of Number:-"+ret);

console.log("Accept Number From user and return Its Binary Number:-");
fun16(13);

console.log("Accept one Number From User Calculate Multiplication of that number");
var ret:number=fun17(712);
console.log("MulitPlication Number:-"+ret);

console.log("Accept Number From user and return Its Even Number of Additon:-");
fun18(7429);
fun18(90281);

console.log("Accept one Number From User And Count Occuracnce of 5 From given Number");
var ret:number=fun19(55125);
console.log("Occuracnces Of 5:-"+ret);

console.log("Accept one Number From User And Count Occuracnce of 0 From given Number");
var ret:number=fun20(70200);
console.log("Occuracnces Of 0:-"+ret);

console.log("Accept one Number From User And Count number Which is Greater Than 5 From given Number");
var ret:number=fun21(70290);
console.log("Occuracnce Of Greater Than 5 Number:-"+ret);

console.log("Accept Numbe From user and Sum the All odd Number from that Number");
var $$ret=fun22(1347);
console.log("Sum Of All odd Number:-",$$ret);


console.log("Accept Numbe From user and Display the Diiference Between The Even And Odd Number from that Number:-");
var $$ret=fun23(1347);
console.log("Difference Between Of All Odd Nad Even Number:-",$$ret);

console.log("Accept Number From User Display Minimum Number From that Number");
var __ret=fun24(236);
console.log("Minimum Number isL-",__ret);

console.log("Accept Number From User Display Maximum Number From that Number");
var __ret=fun25(236);
console.log("Maximum Number is:-"+__ret);

console.log("Pattern1");
fun26(5);

console.log("Pattern2");
fun27(5);

console.log("Accept Length and Width From User Calculate the Area of Square");
ret=fun28(4.2,8.9);
console.log("Area Of Square:-"+ret);

console.log("Accept Radius From User Calculate the CircumFerrence:-");
var _ret=fun29(4.2);
console.log("CircumFerence of Circle is:-"+_ret);

console.log("Accept Distnce Into CentiMeter and Convert into Meter:-");
var ret:number=fun30(87);
console.log("Distance is:-"+ret);

console.log("Accept Length of Side from User and Calculate area Of Square:-");
var Ans:number=fun31(4.2);
console.log("Area Of Square:-"+Ans);


console.log("Accept Kilometers From Users And Caculate the rent using Kilometers:-");
var KM=fun32(80);
console.log("Total Number Of KM And rent:-",KM);

var KM=fun32(145);
console.log("Total Number Of KM And rent:-"+KM);

console.log("Accept One Number And One Character From user And Display that character of Number Of time:-");
fun33(5,'M');

console.log("Accept Number From User and Display the Addition of Each Digit factorial Number");

var Add=fun34(324);
console.log("The Addition Of Factorials:-",Add);

var Add=fun34(524);
console.log("The Addition Of Factorials:-",Add);

console.log("Accept Number From User And Check that Number iS Strong Or Not:-");
fun35(145);

console.log("Accept Two Number From user Calculate The Power of One Number Of Second Number Of Time:-");
fun36(3,4);

console.log("Accept Number From User and Check Given Number is Armstrong Or Not:-");
fun37(152);
fun37(153);

console.log("Pattern4:-");
fun38(3);

console.log("Accept One Input According to Input Display Output:-");
fun39('A');
fun39('2');

console.log("Accept Number From User and return Its generic Root:-");
var Ans=fun40(7429);
console.log("Generic-Root Is:-",Ans);

console.log("Accept Amount,Time,Rate of Interest from User And Calculate the Simple interest");
var ret:number=fun41(510,2,0.1);
console.log("Simple-Interest is:-",ret);

console.log("Accept Array From User Display Even Number From that Array:-")
var Arr:number[]=[11,12,13,14,15,16];
fun42(Arr);

console.log("Accept Array from user And Display in Reverse Order");
var Arr:number[]=[11,12,13,14,15,16];
fun43(Arr);

console.log("Accept Array from user And Display in Addition Of Even Number:-");
var Arr:number[]=[11,12,13,14,15,16];
var ret=fun44(Arr);
console.log("Even Addition is;-",ret);

console.log("Accept Array from user And Display Element Which is Greater Than 8.9:-");
var Arr:number[]=[1.2,33.3,45.65,44,2.2];
fun45(Arr);

console.log("Accept Array from user And Display Occurance Of Element Which is Present in Array:-");
var Arr:number[]=[121,1.2,313.3,45.65,44,2.2,11,45.46,1.2,11,1123];
fun46(Arr);

console.log("Accept Array from User Display the Additon of Each Element From Array");
var Arr:number[]=[123,44,22,11,65,77,10];
fun47(Arr);

console.log("Accept Array from User Display the Largest Elements From Array");
var Arr:number[]=[123,44,22,11,65,77,10];
var Max=fun48(Arr);
console.log("Maximum Element:-",Max);


console.log("Accept Array from User Display the Smallest Elements From Array");
var Arr:number[]=[123,44,22,11,2,65,77,10];
var Min:Number=fun49(Arr);
console.log("Minimum Element:-",Min);

/*console.log("Accept Array from User Display the Prime Elements From Array");
var Arr:number[]=[123,44,22,11,2,65,77,10];
fun50(Arr);*/

console.log("Accept Array From User And if Element is Divisible by Then ElementIs increase By 1 And If Element Is By 3 and 5 then Element is increase by 2");
var Arr:number[]=[123,26,10,15,112,9,3,27,24,22,111];
fun51(Arr);


console.log("Accept The Array From User and Replace The Even Element With 1 Value And Odd Element With 0 value");
var Arr:number[]=[123,26,10,15,112,9,3,27,24,22,111];
fun52(Arr);

console.log("Accept One Number From User And One Number Display All Elements Divisible By that Number");
var Arr:number[]=[10,20,34,40,55,60];
fun53(Arr,5);

console.log("Accept Two Array From User And Check Both Array Are Same Or Not.");
var Arr1:number[]=[10,20,30,40,50];
var Arr2:number[]=[10,20,30,40,50];
fun54(Arr1,Arr2);


console.log("Accept Two Array From User And Display Difference Between Both Array.");
var Arr1:number[]=[20,30,40,50];
var Arr2:number[]=[10,20,30,40,50];
var DiffArr=fun55(Arr1,Arr2);
console.log("Difference Between Both Array:-"+DiffArr);

console.log("Accept Array from user And Check That Array is Sorted in Increasing Order Or Not.");
var Arr:number[]=[20,30,410,50];
fun56(Arr);

