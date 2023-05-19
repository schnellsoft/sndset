class SndSet extends Set{

      static union(...vsets) {
          let vs = []; let vsx = [];
          for(let s of vsets) {
             vsx = Array.from(s);
             vs = vs.concat(vsx);
             //vsx = [];   
          }
          //vs = vs.sort((x, y) => x - y);
          let res = new SndSet(vs);
          return res;
      }

      static intersection(...vsets) {
          let resSet = new SndSet();
          if (vsets.length == 0) return resSet;
          if (vsets.length == 1) return vsets[0]; 
          vsets[0].forEach(element => {
             for(let i = 1; i < vsets.length; i++) {
                 if(vsets[i].has(element)) resSet.add(element);
             }
          }); 
          return resSet;
      }

      static diff(s1, s2) {
        let resSet = new SndSet();
        if(s1.size == 0) return resSet;
        if(s2.size == 0) return s1;
        s1.forEach(element => {
            if(!s2.has(element)) resSet.add(element);
        })
        return resSet;
      }

      static symDiff(s1, s2) {
        return this.union(this.diff(s1, s2), this.diff(s2, s1));
      }

}

export { SndSet }

