export const CREATE_USER_PARAMS = {
  phone: "7466165312",
  country_code: "44",
  verification_code: "4935", // a 4-digit verification code,
  email: "hemanth.vja@gmail.com",
  bitcoin_address:
    "AC8O0OCGMPMHMTSG28STQZ9HCCXC6VQ7OZGVW4LV4BYTBYINC4IOLZJGFIULNXLF",
  initial_address_type: "simple",
  xpub_key:
    "xpub6CPaz6tavH68fxBJpdJykvXjsjtpJ4cKPW1BuxgnGHaL3SApxkYNppJnEHo3xbyzUy9ortD6jJYk9ejSb3s4nkCvgC8qpuivsfUqcxDF2oB",
  xpub_addr_type: "auto", // (auto/p2sh-segwit/bech32)
  xpub_path: "m/0/x", // select derivataion paths (m/x-simple, m/0/x-industry std.)
  category: "trezor" // affliate parameter (trezor/blockforge)
};

export const SEND_EMAIL_PARAMS = {
  email: "hemanth.vja@gmail.com",
  language: "en", // (nl-Dutch, en-English)
  bitcoin_address: "1MUFSFDqDJFYPjUf7nUKfidpFWAq2duB9U"
};

export const SEND_SMS_PARAMS = {
  phone: 7466165312,
  country_code: 44
};

export const VERIFY_EMAIL_PARAMS = {
  token: "WGRYTYEHDPUTRDDWCTGFGUIAIQZLGWGTE5Y4KYVGR9REGB9UQHNVCNPV3MMNDLDM"
};

export const VERIFY_XPUB_PARAMS = {
  xpub_key:
    "xpub6CojA7MuQ3TRPEkV6PRR6pzCqNBmNEKRG4gNmapeayeuwJxXYxCGz65DPVDfnXwHurpsbGgr9Noac4bY81XY3T42jKU1vcnVmQBr6LNgnXZ",
  xpub_path: "m/0/x",
  xpub_addr_type: "auto" // (auto/p2sh-segwit/bech32)
};
