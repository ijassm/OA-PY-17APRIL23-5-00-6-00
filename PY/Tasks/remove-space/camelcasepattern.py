class Solution:
    def CamelCase(self,N,Dictionary,Pattern):
        l=[]
        for i in Dictionary:
            pat="".join([u for u in i if u.isupper()])
            if(pat.startswith(Pattern)):
                l.append(i)
        if(len(l)>=1):
            return l
        return [-1]