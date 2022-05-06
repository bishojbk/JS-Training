function rotate()
{
    let var1="alphagamer";
    let x=var1.length;
    for (;x>0;x=x-1)
    {
    let text =var1[var1.length - 1] + var1.substring(0, var1.length - 1);
    document.write(text);
}
}
