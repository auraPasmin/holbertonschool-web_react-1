export interface MajorCredits {
  credits: number;
  brand?: string;
}

export interface MinorCredits {
  credits: number;
  brand?: string;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const major: MajorCredits = {
    credits: subject1.credits + subject2.credits,
    brand: 'Major',
  }
  return major;
};

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const minor: MinorCredits = {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor',
  }
  return minor;
};

/* TESTS
const maj1: MajorCredits = { credits: 8, };
const maj2: MajorCredits = { credits: 8, };
console.log(sumMajorCredits(maj1, maj2));

const mij1: MinorCredits = { credits: 8, };
const mij2: MinorCredits = { credits: 8, };
console.log(sumMinorCredits(mij1, mij2));*/
